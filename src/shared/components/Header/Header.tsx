import { Link } from "react-router-dom";
import { ROUTES } from "../../static";
import styles from "./Header.module.scss";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { LogOut } from "../../firebase/actions/logOut";
import { auth } from "../../firebase/firebase";
import { useAppSelector } from "../../../api/redux/store";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../api/redux/slices/user";
import { LogoIcon } from "../../icons/LogoIcon";

const LINKS = [
  {
    title: "Favorite",
    href: ROUTES.FAVORITES,
  },
  {
    title: "History",
    href: ROUTES.HISTORY,
  },
  {
    title: "Search",
    href: ROUTES.SEARCH,
  },
];

export const Header = () => {
  const { setStore } = useAuthContext();

  const { session } = useAuthContext();

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await LogOut(auth);
    setStore(false);
    dispatch(removeUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <nav className={styles.navbar}>
          <Link to={"/"}>
            <LogoIcon />
          </Link>
          {LINKS.map((link, i) => (
            <Link className={styles.link} to={link.href} key={i}>
              {link.title}
            </Link>
          ))}
        </nav>
        {session.isLogedIn ? (
          <button className={styles.unAuthBtn} onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <div className={styles.logInLinks}>
            <Link className={styles.link} to={"/signin"}>
              SigIn
            </Link>
            <Link className={styles.link} to={"/signup"}>
              SignUp
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
