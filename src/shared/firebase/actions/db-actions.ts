import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { database } from "../firebase";

export const getUserhistory = async (uid: string) => {
  const docRef = doc(database, "users", uid);
  const snapShot = await getDoc(docRef);
  const userData = snapShot.data();

  return userData?.history ?? null;
};

export const setUserHistory = async (uid: string, query: string) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    history: arrayUnion(query),
  });
};

export const removeQueryFromHistory = async (uid: string, query: string) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    history: arrayRemove(query),
  });
};

export const clearUserHistory = async (uid: string) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    history: [],
  });
};
