import { Avatar, Header, Navbar } from '../../components';
import { Experience, Habits } from './compontents';

import { AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const friendsList = [
  {
    _id: '1',
    name: 'César Herrera',
    email: 'herrera.cesar.arg@gmail.com',
    avatar: 'https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg',
    password: '',
  },
  {
    _id: '2',
    name: 'José Carlos del Valle',
    email: 'seck.dv15@gmail.com',
    avatar: 'https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg',
    password: '',
  },
  {
    _id: '3',
    name: 'Nathalia Riascos',
    email: 'riascosnathalia6@gmail.com',
    avatar: 'https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg',
    password: '',
  },
];

const FriendDetails = () => {
  const { id } = useParams();
  const [isFollwing, setFollwing] = useState(false);
  const data = friendsList.find((friend) => friend._id === id)!;

  return (
    <>
      <div className="main-container flex flex-col gap-5 dark:bg-gray-800">
        <Header title="Friend Details" editUrl="" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between">
          <div className="flex flex-col gap-8 lg:w-1/2 justify-center max-w-sm">
            <Avatar user={data} />
            <button
              onClick={() => setFollwing(true)}
              className="
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
                justify-center"
            >
              <AiOutlinePlus />
              {isFollwing ? 'Following' : 'Follow'}
            </button>
            <Experience />
          </div>
          <div className="lg:w-1/2 max-w-sm w-full">
            <Habits />
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
};

export default FriendDetails;
