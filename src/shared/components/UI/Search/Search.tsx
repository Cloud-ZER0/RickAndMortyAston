import React from "react";
import styles from "./Search.module.scss";
import { ErrMessage } from "../ErrMessage/ErrMessage";
import { useNavigate, useSearchParams } from "react-router-dom";

const ERROR = "Type something to search!";

const debounceErr = async (fn: Function) => {
  setTimeout(() => {
    fn();
  }, 3000);
};

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    setSearchQuery(searchParams.get("name"));
  }, [searchParams]);

  const handleError = () => {
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(searchQuery);
    e.preventDefault();
    if (!searchQuery) {
      setError(ERROR);
      debounceErr(handleError);
    } else {
      navigate(`/search?name=${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} action="">
      <div className={styles.wrapper}>
        <label htmlFor="search">Find any charecter!</label>
        <input
          type="text"
          id="#search"
          placeholder="Type charecter name"
          className={styles.searchInpt}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery ?? ""}
        />
        {error && <ErrMessage>{error}</ErrMessage>}
      </div>
      <button type="submit" className={styles.findBtn}>
        Find!
      </button>
    </form>
  );
};
