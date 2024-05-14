import { useParams } from "react-router-dom";
import styles from "./CardPage.module.scss";
import clsx from "clsx";
import { CardLarge } from "../../components/CardLarge/CardLarge";

const CardPage = () => {
  const { id } = useParams();

  return (
    <>
      <section className={clsx("section", styles.charecterPage)}>
        {id ? <CardLarge id={id} /> : null}
      </section>
    </>
  );
};

export default CardPage;
