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
} from '../pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import EditProfile from '../pages/EditProfile/EditProfile';
import { ProtectedRoute } from './ProtectedRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'home'} />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: 'friends',
    element: (
      <ProtectedRoute>
        <AddFriends />
      </ProtectedRoute>
    ),
  },
  {
    path: 'friend/:id',
    element: (
      <ProtectedRoute>
        <FriendDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: 'profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: 'edit-profile',
    element: (
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: 'habits',
    element: (
      <ProtectedRoute>
        <HabitsList />
      </ProtectedRoute>
    ),
  },
  {
    path: 'add-habits',
    element: (
      <ProtectedRoute>
        <AddHabit />
      </ProtectedRoute>
    ),
  },
  {
    path: 'habit-detail/:id',
    element: (
      <ProtectedRoute>
        <HabitDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
