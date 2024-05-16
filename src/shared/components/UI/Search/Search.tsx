import React, { useMemo, useState } from "react";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import { IconSearch } from "../../../icons/SearchIcon";
import useSearch from "../../../hooks/useSearch";
import { useFindCharactersByNameQuery } from "../../../../api/redux/api/card-api";
import { useDebounce } from "use-debounce";
import { SuggestList } from "../../SuggestList/SuggestList";

const isSearchBarVisible = (pathname: string): boolean => {
  if (pathname === "/signin" || pathname === "/signup") return false;
  return true;
};

export const Search = () => {
  const { pathname } = useLocation();
  const { searchQuery, toggleOnChange, toggleSearch } = useSearch();
  const [value] = useDebounce(searchQuery, 1000);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVisible(false);
    toggleSearch();
  };

  return (
    <>
      {isSearchBarVisible(pathname) ? (
        <form onSubmit={handleSubmit} className={styles.searchForm} action="">
          <input
            onFocus={() => setIsVisible(true)}
            // onBlur={() => setIsVisible(false)}
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
