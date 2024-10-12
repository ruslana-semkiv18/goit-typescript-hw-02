import { ThreeDots } from 'react-loader-spinner'
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <ThreeDots height="80" width="80" color="#4e75ff" />
    </div>
  )
}
