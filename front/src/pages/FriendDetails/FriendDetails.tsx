import { Avatar, Header, Navbar } from '../../components';
import { Experience, Habits } from './compontents';

import { AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const friendsList = [
  {
    id: '1',
    username: 'César Herrera',
    email: 'herrera.cesar.arg@gmail.com',
    avatar: 'https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg',
    password: '',
  },
  {
    id: '2',
    username: 'José Carlos del Valle',
    email: 'seck.dv15@gmail.com',
    avatar: 'https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg',
    password: '',
  },
  {
    id: '3',
    username: 'Nathalia Riascos',
    email: 'riascosnathalia6@gmail.com',
    avatar: 'https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg',
    password: '',
  },
];

const FriendDetails = () => {
  const { id } = useParams();
  const [isFollwing, setFollwing] = useState(false);
  const data = friendsList.find((friend) => friend.id === id)!;

  return (
    <>
      <div className="main-container flex flex-col gap-5 dark:bg-gray-800">
        <Header title="Friend Details" />
        <Avatar user={data} />
        <button
          onClick={() => setFollwing(true)}
          className="rounded-xl bg-primary-dark text-white border-2 p-2 hover:border-primary-dark hover:bg-white hover:text-primary-dark transition-colors dark:border-none"
        >
          <div className="flex items-center gap-2 justify-center">
            <AiOutlinePlus />
            {isFollwing ? 'Following' : 'Follow'}
          </div>
        </button>
        <Experience />
        <Habits />
      </div>
      <Navbar />
    </>
  );
};

export default FriendDetails;
