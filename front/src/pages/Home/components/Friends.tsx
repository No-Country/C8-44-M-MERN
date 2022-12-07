import { Friend, Loader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { CiCirclePlus } from 'react-icons/ci';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getUser } from '../../../redux/features';
import { useEffect } from 'react';

const Friends = ({ user }: any) => {
  const dispatch = useAppDispatch();
  /* const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  ); */
  /* useEffect(() => {
    !user && dispatch(getFollowers());
  }, []); */
  return (
    <div className="mb-10 lg:w-2/12">
      <div className="flex justify-between items-center">
        <h2 className="home-title">Friends</h2>
        <Link to="/friends" className="lg:hidden">
          <HiPlus className="text-primary-light text-lg" />
        </Link>
      </div>
      <div className="relative h-1 w-1/ bg-secondary-light rounded-full dark:bg-secondary-regular">
        <div className="absolute w-1/3 bg-primary-dark rounded-full"></div>
      </div>
      {user?.followers?.length ? (
        <>
          {user?.followers?.map((f: any) => (
            <Friend
              key={f._id}
              id={f._id}
              name={f.username}
              pictureUrl={f.avatar}
            />
          ))}
        </>
      ) : (
        <>
          <div className="items-center mt-5 justify-between text-sm  rounded-md bg-secondary-light/30 w-full py-4 px-6">
            <h3 className="text-secondary-dark text-center dark:text-secondary-light">
              No Friends
            </h3>
          </div>
          <Link to="/friends" className="hidden lg:block">
            <CiCirclePlus className="text-primary-light text-5xl w-full mt-4" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Friends;
