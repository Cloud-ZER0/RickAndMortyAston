import { Link } from "react-router-dom";
import { ROUTES } from "../../static";
import styles from "./Header.module.scss";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { LogOut } from "../../firebase/actions/logOut";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../api/redux/slices/user";
import { LogoIcon } from "../../icons/LogoIcon";
import { Search } from "../UI/Search/Search";
import { useAppDispatch } from "../../../api/redux/store";

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
  const { setStore, session } = useAuthContext();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await LogOut(auth);
    setStore(false);
    dispatch(removeUser());
  };

  console.log("render");

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
        <Search />
        <div>
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
      </div>
    </header>
  );
};
