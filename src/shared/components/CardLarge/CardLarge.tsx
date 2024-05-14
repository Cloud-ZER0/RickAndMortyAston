import React from "react";
import { Loading } from "../Loading/Loading";
import { Card } from "../Card/Card";
import styles from "./CardLarge.module.scss";
import { useGetSingleCharacterQuery } from "../../../api/redux/api/card-api";
import { Navigate } from "react-router-dom";

interface CardLargeProps {
  id: string;
}

const Episode = ({ epNumber }: { epNumber: string }) => {
  return (
    <div className={styles.episodeWrapper}>
      <p>{`Episode #${epNumber}`}</p>
    </div>
  );
};

export const CardLarge = ({ id }: CardLargeProps) => {
  const { data, isLoading, isError } = useGetSingleCharacterQuery(id);

  if (!data && !isLoading) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {data && (
        <div className={styles.wrapper}>
          <Card {...data} />
          <div className={styles.card}>
            <h2>Episodes list</h2>
            <div className={styles.episodesList}>
              {data.episodes &&
                data.episodes.map((ep, i) => <Episode epNumber={ep} key={i} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
