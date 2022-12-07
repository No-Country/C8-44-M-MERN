import { Friend, Header, Loader, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { getUsers } from '../../redux/features';

const AddFriends = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, users } = useAppSelector(
    (state) => state.users
  );
  const [searchResult, setSearchResult] = useState(users);

  useEffect(() => {
    users.length === 0 && dispatch(getUsers());
  }, []);

  useEffect(() => {
    setSearchResult(users);
  }, [users]);

  const handleSearch = (e: any, users: any) => {
    setSearchResult(
      users.filter(
        (user: any) =>
          user.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 dark:bg-gray-800">
        <Header title="Add Friend" editUrl="" />
        <input
          id="search"
          placeholder="Search friends"
          className="rounded-md border-secondary-light border-2 p-2 text-secondary-dark dark:bg-secondary-dark dark:border-none dark:text-secondary-light"
          type="text"
          onKeyUp={(e) => {
            handleSearch(e, users);
          }}
        />
        <div className="mt-10 md:grid md:grid-cols-3 lg:grid-cols-4 md:justify-items-center md:gap-8 md:items-start mb-10">
          {searchResult.map((user) => {
            return (
              <Friend
                key={user._id}
                _id={user._id}
                username={user.username}
                avatar={user.avatar}
                fullname={user.fullname}
                rol={user.rol}
                followers={user.followers}
                habits={user.habits}
                email={user.email}
                healthExperience={user.healthExperience}
                educationExperience={user.educationExperience}
                experience={user.experience}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddFriends;
