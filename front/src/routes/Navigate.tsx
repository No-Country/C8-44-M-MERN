import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { 
  Login,
  Register,
  Home,
  NotFound,
  HabitDetail
} from "../pages";

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
    path: "habit-detail/:id",
    element: <HabitDetail />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router