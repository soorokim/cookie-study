import { createBrowserRouter, redirect } from "react-router-dom";
import HttpOnlyPage from "./HttpOnlyPage";
import CookiePage from "./CookiePage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/cookie"),
  },
  {
    path: "/cookie",
    Component: CookiePage,
  },
  {
    path: "/http-only",
    Component: HttpOnlyPage,
  },
]);

export default router;
