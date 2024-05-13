import clsx from "clsx";
import { useAuthContext } from "../../../../../api/context/useAuthContext";
import useLogout from "../../../../firebase/hooks/useLogout";
import { Link } from "react-router-dom";
import styles from "./Controls.module.scss";

export const Controls = () => {
  const { session } = useAuthContext();
  const onLogout = useLogout();

  return (
    <div
      className={clsx(
        styles.controlsWrapper,
        session.loading ? styles.hidden : ""
      )}
    >
      {session.isLogedIn ? (
        <button className={styles.unAuthBtn} onClick={onLogout}>
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
  );
};
