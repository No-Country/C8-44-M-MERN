import { Friend, Header, Loader, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { getUsers } from '../../redux/features';

const AddFriends = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, users } = useAppSelector(
    (state) => state.users
  );
  useEffect(() => {
    const allUs = async () => {
      await dispatch(getUsers());
    };
    allUs();
    console.log(users);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 dark:bg-gray-800">
        <Header title="Add Friend" editUrl="" />
        <input
          id="search"
          placeholder="Search friends"
          className="rounded-full border-secondary-light border-2 p-2 text-secondary-dark dark:bg-secondary-dark dark:border-none dark:text-secondary-light"
        />
        <div className="mt-10 md:grid md:grid-cols-3 lg:grid-cols-4 md:justify-items-center md:gap-8 md:items-start mb-10">
        {users.map((user) => {
          return (
            <Friend
              id={user.email}
              key={user.email}
              name={user.username}
              pictureUrl={user.avatar}
              email={user.email}
              showButton={true}
            />
          );
        })}
          </div>
      </div>
    </>
  );
};

export default AddFriends;
