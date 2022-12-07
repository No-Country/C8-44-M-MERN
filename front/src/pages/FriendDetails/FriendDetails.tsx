import { Avatar, Header, Loader } from '../../components';
import { Experience, Habits } from './compontents';
import { addFriend, getUser, getUsers } from '../../redux/features';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';

import { AiOutlinePlus } from 'react-icons/ai';
import { User } from '../../models';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const FriendDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    user.user.email === '' && dispatch(getUser());
    dispatch(getUsers());
  }, []);
  const { isLoading, isSuccess, isError, users } = useAppSelector(
    (state) => state.users
  );
  const user = useAppSelector((state) => state.user);
  const friend: User = users.find((friend) => friend._id === id) || {
    _id: '',
    username: '',
    fullname: '',
    avatar: '',
    rol: '',
    email: '',
    password: '',
    habits: [],
    followers: [],
    healthExperience: 0,
    educationExperience: 0,
    experience: 0,
  };

  const following =
    user.user.followers.find((friend) => friend._id === id) || null;
  console.log(following);

  const handleFollow = async () => {
    const response = await dispatch(addFriend(friend._id));
    if (response.payload.message) {
      toast.error(`An error occurred trying to follow the user`);
    } else {
      toast.success(`User followed successfully`);
      navigate('/home');
    }
  };

  return isLoading || user.isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-5 dark:bg-gray-800">
        <Header title="Friend Details" editUrl="" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between">
          <div className="flex flex-col gap-8 lg:w-1/2 justify-center max-w-sm">
            <Avatar user={friend} />
            <button
              disabled={following ? true : false}
              onClick={handleFollow}
              className={`
                rounded-xl
                bg-primary-dark
                text-white
                border-2 p-2
                hover:border-primary-dark
                hover:bg-white
                hover:text-primary-dark
                transition-colors
                dark:border-none
                flex items-center
                gap-2
                w-full
                max-w-sm
                justify-center
                ${
                  following &&
                  'lg:bg-white lg:text-primary-dark lg:border-primary-dark cursor-default'
                }
                `}
            >
              <AiOutlinePlus />
              {following ? 'Following' : 'Follow'}
            </button>
            <Experience user={friend} />
          </div>
          <div className="lg:w-1/2 max-w-sm w-full">
            <Habits user={friend} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendDetails;
