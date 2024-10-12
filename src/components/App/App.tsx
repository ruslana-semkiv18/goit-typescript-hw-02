import { useState, useEffect } from 'react';
import { fetchImages } from '../../services/image-api.ts';
import SearchBar from '../SearchBar/SearchBar.tsx';
import ImageGallery from '../ImageGallery/ImageGallery.tsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.tsx';
import Loader from '../Loader/Loader.tsx';
import ImageModal from '../ImageModal/ImageModal.tsx';
import { Image, FetchImagesResponse } from '../../types';
import './App.css';


export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (query === "") {
      return;
    }

      async function getImages() {
        try {
          setLoading(true);
          setError(false);
          const res: FetchImagesResponse = await fetchImages(query, page);
          setImages((prevImages) => [...prevImages, ...res.images]);
          setTotalPages(res.totalPages);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
    };

      getImages();
  }, [query, page]);
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleClickImage = (image: Image) => {
    setSelectedImage(image);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    console.log(modal);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} onClickImage={handleClickImage}/>}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages &&<LoadMoreBtn onClick={handleLoadMore}/>}
      {page >= totalPages && <b>END OF COLLECTION!!!</b>}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  )
}

