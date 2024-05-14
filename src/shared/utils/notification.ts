import { Bounce, ToastOptions, toast } from "react-toastify";

const LOGOUT_MSG = "You succesfuly logout";
const ERROR_MSG = "Oops...something gone wrong...";
const CLEAR_FAVORITE_MSG = "Whislist was cleared";
const FAVORITE_MSG = "Added to favorite";
const FAVORITE_REMOVE_MSG = "Removed from favorite";
const CLEAR_HISTORY_MSG = "History was cleared";
const HISTORY_REMOVE_MSG = "History from favorite";

const TOAST_SETUP: ToastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Bounce,
  theme: "light",
};

export const onNotifySuccessLogout = () => {
  toast(LOGOUT_MSG, TOAST_SETUP);
};

export const onNotifyError = () => {
  toast.error(ERROR_MSG, TOAST_SETUP);
};

export const onNotifyClearFavoirte = () => {
  toast(CLEAR_FAVORITE_MSG, TOAST_SETUP);
};

export const onNotifyFavoriteAdded = () => {
  toast(FAVORITE_MSG, TOAST_SETUP);
};
export const onNotifyFavoriteRemoved = () => {
  toast(FAVORITE_REMOVE_MSG, TOAST_SETUP);
};

export const onNotifyClearHistory = () => {
  toast(CLEAR_HISTORY_MSG, TOAST_SETUP);
};

export const onNotifyHistoryRemoved = () => {
  toast(HISTORY_REMOVE_MSG, TOAST_SETUP);
};
