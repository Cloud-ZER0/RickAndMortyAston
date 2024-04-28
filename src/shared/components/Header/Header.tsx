import { Link } from "react-router-dom";
import { ROUTES } from "../../static";
import styles from "./Header.module.scss";
import { useAuthContext } from "../../../api/context/useAuthContext";

const LINKS = [
  {
    title: "Главная",
    href: ROUTES.HOME,
  },
  {
    title: "Избранное",
    href: ROUTES.FAVORITES,
  },
  {
    title: "История",
    href: ROUTES.HISTORY,
  },
  {
    title: "Поиск",
    href: ROUTES.SEARCH,
  },
];

export const Header = () => {
  const { setStore } = useAuthContext();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {LINKS.map((link, i) => (
          <Link to={link.href}>{link.title}</Link>
        ))}
      </nav>
      <button
        className={styles.unAuthBtn}
        onClick={() => setStore("unauthorized")}
      >
        Log out
      </button>
    </header>
  );
};
