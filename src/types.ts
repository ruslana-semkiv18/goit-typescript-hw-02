export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface FetchImagesResponse {
  images: Image[];
  totalPages: number;
}

export interface ImageGalleryProps {
  images: Image[];
  onClickImage: (image: Image) => void;
}

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}
