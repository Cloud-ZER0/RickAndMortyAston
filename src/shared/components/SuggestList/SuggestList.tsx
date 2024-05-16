import { ClipLoader } from "react-spinners";
import styles from "./SuggestList.module.scss";
import { useNavigate } from "react-router-dom";
import { useFindCharactersByNameQuery } from "../../../api/redux/api/card-api";
import { useEffect, useMemo } from "react";

interface SuggestItemProps {
  image: string;
  name: string;
  id: number | string;
  handleVisible?: () => void;
}

const SuggestItem = ({ image, name, id }: SuggestItemProps) => {
  const navigate = useNavigate();
  const handleResultClick = () => {
    navigate(`/${id}`);
  };
  return (
    <button onClick={handleResultClick} className={styles.itemWrapper}>
      <div className={styles.img}>
        <img src={image} alt="character" />
      </div>
      <span>{name}</span>
    </button>
  );
};

interface SuggestListProps {
  value: string | null;
}
export const SuggestList = ({ value }: SuggestListProps) => {
  const { data, isFetching, isSuccess, isLoading, isError } =
    useFindCharactersByNameQuery(value ?? "", { skip: value ? false : true });

  return (
    <>
      <div className={styles.suggestList}>
        {isFetching || !value ? (
          <div className={styles.loader}>
            <ClipLoader color="#36d7b7" />
          </div>
        ) : !isSuccess ? (
          <div className={styles.notFound}>
            <span>Not found</span>
          </div>
        ) : null}
        {isSuccess && data
          ? data.map((el, i) => <SuggestItem key={i} {...el} />)
          : null}
      </div>
    </>
  );
};
