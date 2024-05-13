import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../icons/LogoIcon";
import styles from "./Navbar.module.scss";
import { ROUTES } from "../../../../static";

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

export const Navbar = () => {
  return (
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
  );
};
