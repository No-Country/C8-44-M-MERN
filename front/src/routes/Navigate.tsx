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
import { ProtectedRoute } from './ProtectedRoutes'
import EditProfile from '../pages/EditProfile/EditProfile';

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
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: "friends",
    element: <ProtectedRoute><AddFriends /></ProtectedRoute>,
  },
  {
    path: "friend/:id",
    element: <ProtectedRoute><FriendDetails /></ProtectedRoute>,
  },
  {
    path: "profile",
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
  },
  {
    path: "edit-profile",
    element: <ProtectedRoute><EditProfile /></ProtectedRoute>,
  },
  {
    path: "habits",
    element: <ProtectedRoute><HabitsList /></ProtectedRoute>,
  },
  {
    path: "add-habits",
    element: <ProtectedRoute><AddHabit /></ProtectedRoute>,
  },
  {
    path: "habit-detail/:id",
    element: <ProtectedRoute><HabitDetail /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
