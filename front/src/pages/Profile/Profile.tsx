import { GiToken, GiTrophyCup } from 'react-icons/gi';
import { Header, Loader, Navbar, Avatar } from '../../components';
import { RiToggleFill, RiToggleLine } from 'react-icons/ri';
import { changeTheme, getUser, logout, resetUser } from '../../redux/features';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import EditProfile from './components/EditProfile';
import profilePicture from '../../assets/profile.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const imgDedault =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const user = {
  username: 'Consuelo',
  email: 'consuelo@gmail.com',
  avatar: '',
  password: '',
};

const Profile = () => {
  const navigate = useNavigate();
  const [ isActive, setIsActive ] = useState(false)
  const dispatch = useAppDispatch();
  
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );
  const { darkmode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    user.email == '' && dispatch(getUser());
  }, []);

  const themeHandler = () => {
    dispatch(changeTheme(!darkmode));
  };

  const logoutHandler = async () => {
    dispatch(logout());
    dispatch(resetUser());
    navigate('/login');
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 mb-7 dark:bg-gray-800 transition-colors duration-700">
        <Header title="My Profile" fn={() => setIsActive(!isActive)}/>
        <div>
          { !isActive? <Avatar user={user} /> : <EditProfile fn={() => setIsActive(!isActive)} /> }
          <div className="mt-4">
            <h2 className="home-title">Progress</h2>
            <div className="relative h-1 w-full bg-secondary-light rounded-md dark:bg-secondary-regular">
              <div className="absolute w-1/3 bg-primary-light rounded-md"></div>
            </div>
            <div className="grid gap-3 mt-3">
              {user?.habits?.length ? (
                <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark dark:text-secondary-light">
                    Habit Streak
                  </h3>
                  <p className="font-bold text-red-700">5 days</p>
                </div>
              ) : (
                <div className="items-center justify-between text-sm  rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark text-center dark:text-secondary-light">
                    No Habits
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="home-title">Trophys</h2>
            <div className="relative h-1 w-full bg-secondary-light rounded-md dark:bg-secondary-regular">
              <div className="absolute w-1/3 bg-primary-light rounded-md"></div>
            </div>
            <div className="grid gap-3 mt-3">
              <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark dark:text-secondary-light">
                  Habit Streak
                </h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark dark:text-secondary-light">
                  Habit Streak
                </h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                <h3 className="text-secondary-dark dark:text-secondary-light">
                  Habit Streak
                </h3>
                <GiTrophyCup className="text-xl text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 gap-3 home-title w-full">
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
              className="btn btn-secondary border-2"
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
