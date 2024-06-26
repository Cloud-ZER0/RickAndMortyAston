import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { FavButton } from "../UI/FavButton/FavButton";
import useIsInFavorite from "../../hooks/useIsInFavorite";
import Modal from "../Modal/Modal";

export type Status = "Alive" | "Dead" | "unknown";
export type Gender = "Male" | "Female" | "Genderless" | "unknown";

export interface CharecterCard {
  name: string;
  status: Status;
  gender: Gender;
  location: string;
  image: string;
  id: number;
  episodes?: string[];
}

export const Card = ({
  name,
  status,
  gender,
  location,
  image,
  id,
}: CharecterCard) => {
  const { favorite, modal } = useIsInFavorite(id);

  return (
    <div className={styles.card}>
      <div>
        <Link to={`/${id}`}>
          <img src={image} alt="character" />
        </Link>
        <div className={styles.head}>
          <div className={styles.propWrapper}>
            <span className={styles.propTitle}>Name:</span>
            <p>{name}</p>
          </div>
          <div className={styles.status}>
            <div className={clsx(styles.indicator, styles[status])}></div>
            <p>{status}</p>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.propWrapper}>
            <span className={styles.propTitle}>Gender:</span>
            <p>{gender}</p>
          </div>
          <div className={styles.propWrapper}>
            <span className={styles.propTitle}>Location:</span>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={styles.btnWrap}>
        <FavButton
          isInFavorite={favorite.isInfavorite}
          onTogleFavorite={favorite.onTogleFavorite}
        />
        <Modal isOpen={modal.isModalOpen} toggleModal={modal.onToggleModal} />
      </div>
    </div>
  );
};
