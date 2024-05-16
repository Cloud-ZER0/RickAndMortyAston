import React, { useMemo, useState } from "react";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import { IconSearch } from "../../../icons/SearchIcon";
import useSearch from "../../../hooks/useSearch";
import { useFindCharactersByNameQuery } from "../../../../api/redux/api/card-api";
import { useDebounce } from "use-debounce";
import { ClipLoader } from "react-spinners";
import { NothingYet } from "../../NothingYet/NothingYet";
import { CharecterCard } from "../../Card/Card";

const isSearchBarVisible = (pathname: string): boolean => {
  if (pathname === "/signin" || pathname === "/signup") return false;
  return true;
};

interface SuggestItemProps {
  image: string;
  name: string;
}

const SuggestItem = ({ image, name }: SuggestItemProps) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.img}>
        <img src={image} alt="character" />
      </div>
      <span>{name}</span>
    </div>
  );
};

interface SuggestListProps {
  data: CharecterCard[] | undefined;
  value: string | null;
  isFetching: boolean;
  isSucces: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

const SuggestList = ({
  data,
  value,
  isFetching,
  isSucces,
  isError,
  isLoading,
}: SuggestListProps) => {
  return (
    <>
      <div className={styles.suggestList}>
        {isFetching || !value ? (
          <div className={styles.loader}>
            <ClipLoader color="#36d7b7" />
          </div>
        ) : !isSucces ? (
          <div className={styles.notFound}>
            <span>Not found</span>
          </div>
        ) : null}
        {!isError && data
          ? data.map((el, i) => <SuggestItem key={i} {...el} />)
          : null}
      </div>
    </>
  );
};

export const Search = () => {
  const { pathname } = useLocation();
  const { searchQuery, toggleOnChange, toggleSearch } = useSearch();
  const [value] = useDebounce(searchQuery, 1000);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleSearch();
  };

  const { data, isFetching, isSuccess, isLoading, isError } =
    useFindCharactersByNameQuery(value ?? "", { skip: value ? false : true });

  return (
    <>
      {isSearchBarVisible(pathname) ? (
        <form onSubmit={handleSubmit} className={styles.searchForm} action="">
          <input
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
            type="text"
            placeholder="Start typing"
            className={styles.searchInpt}
            onChange={toggleOnChange}
            value={searchQuery ?? ""}
          />
          <button type="submit" className={styles.findBtn}>
            <IconSearch />
          </button>
          {searchQuery && isVisible && (
            <SuggestList
              data={data}
              value={value}
              isFetching={isFetching}
              isSucces={isSuccess}
              isLoading={isLoading}
              isError={isError}
            />
          )}
        </form>
      ) : null}
    </>
  );
};
