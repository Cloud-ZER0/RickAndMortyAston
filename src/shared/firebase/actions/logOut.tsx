import { Auth, signOut } from "firebase/auth";

export const LogOut = async (auth: Auth) => {
  await signOut(auth).catch((error) => {
    console.log(error);
  });
};
