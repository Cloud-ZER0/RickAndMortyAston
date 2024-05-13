import styles from "./Header.module.scss";
import { Search } from "../UI/Search/Search";

import { Navbar } from "./components/Navbar/Navbar";
import { Controls } from "./components/Controls/Controls";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Search />
      <Controls />
    </header>
  );
};
