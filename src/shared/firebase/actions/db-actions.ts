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
  if (userData) {
    return userData.history;
  }
  return null;
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

export const getUserFavorite = async (uid: string) => {
  const docRef = doc(database, "users", uid);
  const snapShot = await getDoc(docRef);
  const userData = snapShot.data();
  if (userData) {
    return userData.favorites;
  }
  return null;
};

export const setUserFavorite = async (uid: string, cardId: number) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    favorites: arrayUnion(cardId),
  });
};

export const removeItemFromFavorite = async (uid: string, cardId: number) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    favorites: arrayRemove(cardId),
  });
};

export const clearUserFavorite = async (uid: string) => {
  const docRef = doc(database, "users", uid);
  await updateDoc(docRef, {
    favorites: [],
  });
};
