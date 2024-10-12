import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from '../../types';
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(value);
    setValue(""); 
  };

  return (
    <header className={css.container}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={value}
          onChange={handleInput}
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
    </header>
  )
}
