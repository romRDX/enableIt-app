import React, { useCallback, useRef } from 'react';
import styles from "./searchInput.module.scss";
import { BsSearch } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import debounce from '../../utils/debounce';

type SearchInputProps = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
};

const SearchInput: React.FC<SearchInputProps> = ({ setFilter }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }, [setFilter]);

  const handleResetField = () => {
    if(inputRef.current){
      inputRef.current.value = "";
      setFilter("")
    }
  }

  const debouncedOnType = debounce(handleOnType, 1000);

  return (
    <div className={styles.searchInput}>
      <BsSearch />
      <input ref={inputRef} placeholder='Search' onChange={debouncedOnType} />
      <p></p>
      <RiCloseCircleLine size={20} onClick={handleResetField} />
    </div>
  );
}

export default SearchInput;
