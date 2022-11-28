import { Header, Loader, Navbar } from '../../components';
import { HomeExperience, HomeFriends, HomeHabits } from './components';

import profilePicture from '../../assets/profile.jpg';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
// import { selectAuth, setUser } from '../../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { selectUser } from '../../redux/features/user/userSlice';

const Home = () => {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(true);
   setTimeout(() => {
      setIsLoading(false);
   }, 1000);
   return isLoading ? (
      <Loader />
   ) : (
      <>
         <div className='main-container flex flex-col gap-4'>
            <div className='flex justify-between'>
               {/* <h2>{token}</h2> */}
               <h1 className='title text-secondary-dark'>Home</h1>
               <div className='h-16 w-16 rounded-full overflow-hidden'>
                  <img
                     src={profilePicture}
                     alt='Profile picture'
                     className='object-cover h-full '
                  />
               </div>
            </div>
            <HomeExperience />
            <HomeHabits />
            <HomeFriends />
         </div>
         <Navbar />
      </>
   );
};

export default Home;
