import { GiToken, GiTrophyCup } from 'react-icons/gi';
import { Header, Loader, Navbar } from '../../components';
import { RiToggleFill, RiToggleLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Avatar from '../../components/AvatarEdit';
import EditProfile from './components/EditProfile';
import { changeTheme } from '../../redux/features';
import { getUser } from '../../redux/features/user';
import { logout } from '../../redux/features/auth';
import profilePicture from '../../assets/profile.jpg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, user } = useAppSelector((state) => state.user);
  const { darkmode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const themeHandler = () => {
    dispatch(changeTheme(!darkmode));
  };

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 mb-7 dark:bg-black transition-colors duration-700">
        <Header title="My Profile" />
        <div>
          <EditProfile />
          <div>
            <h2 className="home-title">Progress</h2>
            <div className="relative h-1 w-full  bg-primary-light rounded-full"></div>
            <div className="grid gap-3 mt-3">
              {user?.habits?.length ? (
                <div className="flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark">Habit Streak</h3>
                  <p className="font-bold text-red-700">5 days</p>
                </div>
              ) : (
                <div className="items-center justify-between text-sm  rounded-full bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark text-center">No Habits</h3>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="home-title">Trophys</h2>
            <div className="relative h-1 w-full  bg-primary-light rounded-full "></div>
            <div className="grid gap-3 mt-3">
              <div className="flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark">Habit Streak</h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark">Habit Streak</h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark">Habit Streak</h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col m-5 gap-3 home-title">
            <button
              onClick={themeHandler}
              className="btn btn-secondary border-2 flex items-center gap-4 justify-center"
            >
              dark mode
              {darkmode ? (
                <RiToggleFill className="w-10 h-10" />
              ) : (
                <RiToggleLine className="w-10 h-10" />
              )}
            </button>
            <button
              onClick={logoutHandler}
              className="rounded-xl border-primary-light border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors"
            >
              log out
            </button>
            <button className="p-1">delete account</button>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Profile;
