import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from '../../types';
import css from "./ImageGallery.module.css";

export default function ImageGallery({images, onClickImage}: ImageGalleryProps) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
            <ImageCard image={image} onClick={onClickImage}/>
        </li>
      ))}
      </ul>
    </div>
  )
}
