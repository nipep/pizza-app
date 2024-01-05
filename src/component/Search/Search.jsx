import { useContext, useRef, useState, useCallback} from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const {setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current.focus();
  };
  
  const updateInput = useCallback(
    debounce((value) => {
      setSearchValue(value)
    }, 500),
    [],
  )

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateInput(e.target.value);
  }

  

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon__search}
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Введите текст..."
        onChange={onChangeInput}
        value={value}
      ></input>
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.icon__cross}
          id="Outlined"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g id="Fill">
            <polygon points="28.71 4.71 27.29 3.29 16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29 4.71 28.71 16 17.41 27.29 28.71 28.71 27.29 17.41 16 28.71 4.71" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
