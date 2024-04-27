import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../static";

export const Router = () => {
  return (
    <Suspense fallback={<div>Загрузка страницы...</div>}>
      <Routes>
        {ROUTES.map((route, i) => (
          <Route key={i} path={route.src} element={route.page} />
        ))}
      </Routes>
    </Suspense>
  );
};
