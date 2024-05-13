import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthContext } from "../../../api/context/useAuthContext";

const useLogout = () => {
  const { setStore } = useAuthContext();
  return useCallback(async () => {
    await signOut(auth).catch((error) => {
      console.log("some error alert");
    });
    setStore(false);
  }, [setStore]);
};

export default useLogout;
