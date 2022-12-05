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
import { Navbar } from '../components';
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
        <>
          <Navbar />
          <Home />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'friends',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <AddFriends />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'friend/:id',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <FriendDetails />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'profile',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <Profile />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'habits',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <HabitsList />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'add-habits',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <AddHabit />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: 'habit-detail/:id',
    element: (
      <ProtectedRoute>
        <>
          <Navbar />
          <HabitDetail />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
