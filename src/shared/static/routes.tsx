import { CardPage } from "../pages/card/CardPage";
import { FavoritesPage } from "../pages/favorites/FavoritesPage";
import { HistoryPage } from "../pages/history/HistoryPage";
import { MainPage } from "../pages/main/MainPage";
import { SearchPage } from "../pages/search/SearchPage";
import { SignInPage } from "../pages/signin/SignInPage";
import { SignUpPage } from "../pages/signup/SignUpPage";

interface IRoute {
  src: string;
  page: React.ReactNode;
}

export const ROUTES: IRoute[] = [
  {
    src: "/",
    page: <MainPage />,
  },
  {
    src: "/:id",
    page: <CardPage />,
  },

  {
    src: "/search",
    page: <SearchPage />,
  },

  {
    src: "/history",
    page: <HistoryPage />,
  },

  {
    src: "/favorites",
    page: <FavoritesPage />,
  },

  {
    src: "/signup",
    page: <SignUpPage />,
  },
  {
    src: "/signin",
    page: <SignInPage />,
  },
];
