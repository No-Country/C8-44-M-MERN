import {
  AddFriends,
  AddHabit,
  FriendDetails,
  HabitDetail,
  HabitsList,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
} from "../pages";

import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "friends",
    element: <AddFriends />,
  },
  {
    path: "friend/:id",
    element: <FriendDetails />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "habits",
    element: <HabitsList />,
  },
  {
    path: "add-habits",
    element: <AddHabit />,
  },
  {
    path: "habit-detail/:id",
    element: <HabitDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
