import { ImageCardProps } from '../../types'; 
import css from "./ImageCard.module.css";

export default function ImageCard({image, onClick}: ImageCardProps) {
  return (
    <>
      <img className={css.image} src={image.urls.small} alt={image.alt_description} onClick={() => onClick(image)}/>
	  </>
  )
}
