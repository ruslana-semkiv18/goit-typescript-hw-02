import { LoadMoreBtnProps } from '../../types';
import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({onClick}: LoadMoreBtnProps) {
  return (
    <>
      <button className={css.button} type="button" onClick={onClick}>Load more</button>
    </>
  )
}
