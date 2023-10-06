import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    ></input>
  );
};
export default SearchBox;
