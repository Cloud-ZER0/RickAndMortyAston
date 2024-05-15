import clsx from "clsx";
import { useAuthContext } from "../../../../../api/context/useAuthContext";
import useLogout from "../../../../firebase/hooks/useLogout";
import { Link } from "react-router-dom";
import styles from "./Controls.module.scss";
import { Button } from "../../../UI/Button/Button";

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
        <Button onAction={onLogout} variant="Logout">
          Logout
        </Button>
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
