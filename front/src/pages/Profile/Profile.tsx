import { Avatar, Header, Loader } from '../../components';
import { RiToggleFill, RiToggleLine } from 'react-icons/ri';
import { changeTheme, getUser, logout, resetUser } from '../../redux/features';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import EditProfile from './components/EditProfile';
import { useDimensions } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const { lg } = useDimensions();

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
      <div className="main-container flex flex-col gap-4 mb-10 dark:bg-gray-800 transition-colors duration-700 lg:px-30 ">
        <Header
          title="My Profile"
          editUrl=""
          showButton={lg ? false : true}
          fn={() => setIsActive(!isActive)}
        />
        <div>
          {!isActive ? <Avatar user={user} /> : <EditProfile user={user} />}
          <div className="lg:flex lg:gap-24 lg:mt-12">
            <div className="mt-4 lg:w-2/3 lg:mt-0">
              <h2 className="home-title lg:mb-4">Progress</h2>
              <div className="relative h-1 w-full bg-secondary-light rounded-md dark:bg-secondary-regular"></div>
              <div className="grid gap-3 mt-3">
                <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark dark:text-secondary-light">
                    Habits
                  </h3>
                  <p className="font-bold text-primary-dark">
                    {user.habits.length}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark dark:text-secondary-light">
                    Friends
                  </h3>
                  <p className="font-bold  text-primary-dark">
                    {user.followers.length}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark dark:text-secondary-light">
                    Start date
                  </h3>
                  <p className="font-bold  text-primary-dark">08/12/2022</p>
                </div>
                <div className="flex items-center justify-between text-sm rounded-md bg-secondary-light/30 w-full py-4 px-6">
                  <h3 className="text-secondary-dark dark:text-secondary-light">
                    Total experience
                  </h3>
                  <p className="font-bold  text-primary-dark">
                    {user.experience} exp
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3 home-title w-full lg:w-1/3 lg:mt-0">
              <h2 className="home-title">Configuration</h2>
              <div className="relative h-1 w-full bg-secondary-light rounded-md dark:bg-secondary-regular"></div>
              <button
                onClick={() => setIsActive(!isActive)}
                className="btn btn-secondary border-2 items-center gap-4 justify-center hidden lg:flex"
              >
                edit profile
                <AiOutlineEdit className=" w-6 h-6" />
              </button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
