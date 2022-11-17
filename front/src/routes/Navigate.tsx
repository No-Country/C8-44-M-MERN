import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Login, Register, Home } from "../pages";
import { NotFound } from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { 
    path: "login",
    element: <Login />
  },
  { 
    path: "register",
    element: <Register />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router