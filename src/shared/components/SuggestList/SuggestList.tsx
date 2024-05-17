import { ClipLoader } from "react-spinners";
import styles from "./SuggestList.module.scss";
import { Link } from "react-router-dom";
import { useFindCharactersByNameQuery } from "../../../api/redux/api/card-api";

interface SuggestItemProps {
  image: string;
  name: string;
  id: number | string;
}

const SuggestItem = ({ image, name, id }: SuggestItemProps) => {
  return (
    <Link to={`/${id}`} className={styles.itemWrapper}>
      <div className={styles.img}>
        <img src={image} alt="character" />
      </div>
      <span>{name}</span>
    </Link>
  );
};

interface SuggestListProps {
  value: string | null;
}

const SuggestListLoader = () => (
  <div className={styles.loader}>
    <ClipLoader color="#36d7b7" />
  </div>
);

const SuggestListNotFound = () => (
  <div className={styles.notFound}>
    <span>Not found</span>
  </div>
);

export const SuggestList = ({ value }: SuggestListProps) => {
  const { isFetching, isSuccess, currentData } = useFindCharactersByNameQuery(
    value ?? "",
    { skip: value ? false : true }
  );

  const isLoading = isFetching || !value;
  const isVisible = isSuccess && currentData;

  return (
    <>
      <div className={styles.suggestList}>
        {isLoading ? (
          <>
            <SuggestListLoader />
          </>
        ) : !isSuccess ? (
          <SuggestListNotFound />
        ) : null}
        {isVisible
          ? currentData.map((el, i) => <SuggestItem key={i} {...el} />)
          : null}
      </div>
    </>
  );
};
