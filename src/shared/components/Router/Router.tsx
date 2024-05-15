import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../static";
import { LogInCheckoutProvider } from "../../providers";
import { Header } from "../Header/Header";
import { Loading } from "../Loading/Loading";
const SignUpPage = lazy(() => import("../../pages/signup/SignUpPage"));
const MainPage = lazy(() => import("../../pages/main/MainPage"));
const CardPage = lazy(() => import("../../pages/card/CardPage"));
const FavoritesPage = lazy(() => import("../../pages/favorites/FavoritesPage"));
const HistoryPage = lazy(() => import("../../pages/history/HistoryPage"));

const SearchPage = lazy(() => import("../../pages/search/SearchPage"));
const SignInPage = lazy(() => import("../../pages/signin/SignInPage"));
const ErrorPage = lazy(() => import("../../pages/error/Error"));

export const Router = () => {
  return (
    <Suspense fallback={<Loading isLoading />}>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.CARD} element={<CardPage />} />
        <Route
          path={ROUTES.FAVORITES}
          element={
            <LogInCheckoutProvider>
              <FavoritesPage />
            </LogInCheckoutProvider>
          }
        />
        <Route
          path={ROUTES.HISTORY}
          element={
            <LogInCheckoutProvider>
              <HistoryPage />
            </LogInCheckoutProvider>
          }
        />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
