import { Link } from "react-router-dom";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div>
      MainPage
      <Link to={"/favorites"}>test</Link>
    </div>
  );
};
