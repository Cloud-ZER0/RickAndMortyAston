import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/global.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./api/context/contextProvider";
import { Provider } from "react-redux";
import { store } from "./api/redux/store";
import { ToastProvider } from "./shared/components/ToastProvider/ToastProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
