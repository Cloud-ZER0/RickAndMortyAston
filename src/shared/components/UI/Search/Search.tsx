import React from "react";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import { IconSearch } from "../../../icons/SearchIcon";
import useSearch from "../../../hooks/useSearch";
import { useDebounce } from "use-debounce";
import { SuggestList } from "../../SuggestList/SuggestList";
import useSuggestList from "../../../hooks/useSuggestList";
import isSearchBarVisible from "../../../utils/isSearchBarVisible";

export const Search = () => {
  const { pathname } = useLocation();
  const { searchQuery, toggleOnChange, toggleSearch } = useSearch();
  const { isVisible, onInputBlured, onInputFocused } = useSuggestList();
  const [value] = useDebounce(searchQuery, 1000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInputBlured();
    toggleSearch();
  };

  return (
    <>
      {isSearchBarVisible(pathname) ? (
        <form onSubmit={handleSubmit} className={styles.searchForm} action="">
          <input
            onFocus={onInputFocused}
            onBlur={onInputBlured}
            type="text"
            placeholder="Start typing"
            className={styles.searchInpt}
            onChange={toggleOnChange}
            value={searchQuery ?? ""}
          />
          <button type="submit" className={styles.findBtn}>
            <IconSearch />
          </button>
          {searchQuery && isVisible && <SuggestList value={value} />}
        </form>
      ) : null}
    </>
  );
};
