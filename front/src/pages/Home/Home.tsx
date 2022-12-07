import { HomeExperience, HomeFriends, HomeHabits } from './components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Link } from 'react-router-dom';
import { getUser } from '../../redux/features';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    user.email === '' && dispatch(getUser());
  }, []);

  return (
    <>
      <div className="main-container flex flex-col gap-4 lg:gap-8 dark:bg-gray-800">
        <div className="flex justify-between">
          <h1 className="title text-secondary-dark dark:text-white">Home</h1>
          <Link to="/profile">
            <div className="h-16 w-16 lg:w-0 lg:h-0 rounded-full overflow-hidden">
              <img
                src={user.avatar}
                alt="Profile picture"
                className="object-cover h-full "
              />
            </div>
          </Link>
        </div>
        <div className="lg:flex  gap-16 justify-between">
          <HomeExperience user={user} />
          <HomeHabits user={user} />
          <HomeFriends user={user} />
        </div>
      </div>
    </>
  );
};

export default Home;
