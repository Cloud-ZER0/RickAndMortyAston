import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../static";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { SignUpPage } from "../../pages/signup/SignUpPage";
import { MainPage } from "../../pages/main/MainPage";
import { CardPage } from "../../pages/card/CardPage";
import { FavoritesPage } from "../../pages/favorites/FavoritesPage";
import { HistoryPage } from "../../pages/history/HistoryPage";
import { SearchPage } from "../../pages/search/SearchPage";
import { SignInPage } from "../../pages/signin/SignInPage";
import { HeaderProvider } from "../../providers/HeaderProvider";

export const Router = () => {
  const { session } = useAuthContext();

  return (
    <Suspense fallback={<div>Загрузка страницы...</div>}>
      <HeaderProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainPage />} />
          <Route path={ROUTES.CARD} element={<CardPage />} />
          <Route
            path={ROUTES.FAVORITES}
            element={
              session.isLogedIn === "authorized" ? (
                <FavoritesPage />
              ) : (
                <Navigate to={"/signin"} />
              )
            }
          />
          <Route
            path={ROUTES.HISTORY}
            element={
              session.isLogedIn === "authorized" ? (
                <HistoryPage />
              ) : (
                <Navigate to={"/signin"} />
              )
            }
          />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
        </Routes>
      </HeaderProvider>
      <Routes></Routes>
    </Suspense>
  );
};
