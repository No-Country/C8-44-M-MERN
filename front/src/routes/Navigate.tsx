import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Login, Register, Home } from "../pages";

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
  }
]);

export default router