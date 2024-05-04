import { Link } from "react-router-dom";
import { ROUTES } from "../../static";
import styles from "./Header.module.scss";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { LogOut } from "../../firebase/actions/logOut";
import { auth } from "../../firebase/firebase";
import { useAppSelector } from "../../../api/redux/store";

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
  const user = useAppSelector((state) => state.user);

  const handleLogOut = async () => {
    await LogOut(auth);
    setStore(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {LINKS.map((link, i) => (
          <Link to={link.href} key={i}>
            {link.title}
          </Link>
        ))}
      </nav>
      <button className={styles.unAuthBtn} onClick={handleLogOut}>
        Log out
      </button>
      <p style={{ color: "red" }}>{user.name}</p>
    </header>
  );
};
