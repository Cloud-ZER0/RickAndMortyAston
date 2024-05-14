import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { onNotifyError, onNotifySuccessLogout } from "../../utils/notification";

const useLogout = () => {
  const { setStore } = useAuthContext();
  return useCallback(async () => {
    await signOut(auth)
      .then(() => {
        onNotifySuccessLogout();
      })
      .catch((_) => {
        onNotifyError();
      });
    setStore(false);
  }, [setStore]);
};

export default useLogout;
