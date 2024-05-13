import React from "react";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import { IconSearch } from "../../../icons/SearchIcon";
import useSearch from "../../../hooks/useSearch";

const isSearchBarVisible = (pathname: string): boolean => {
  if (pathname === "/signin" || pathname === "/signout") return false;
  return true;
};

export const Search = () => {
  const { pathname } = useLocation();
  const { searchQuery, toggleOnChange, toggleSearch } = useSearch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleSearch();
  };

  return (
    <>
      {isSearchBarVisible(pathname) ? (
        <form onSubmit={handleSubmit} className={styles.searchForm} action="">
          <input
            type="text"
            placeholder="Start typing"
            className={styles.searchInpt}
            onChange={toggleOnChange}
            value={searchQuery ?? ""}
          />
          <button type="submit" className={styles.findBtn}>
            <IconSearch />
          </button>
        </form>
      ) : null}
    </>
  );
};
