import { Header, Loader, Navbar } from '../../components';
import { HomeExperience, HomeFriends, HomeHabits } from './components';
import Confetti from 'react-confetti';
import { Link, useNavigate } from 'react-router-dom';
import profilePicture from '../../assets/profile.jpg';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import { useSelector } from 'react-redux';

import { data } from '../../redux/features/data/dataSlice';

const Home = () => {
   const navigate = useNavigate();
   // const [isLoading, setIsLoading] = useState(true);
   
   const dispatch = useAppDispatch();
   const { isLoading, isSuccess, user } = useAppSelector((state) => state.data);
   useEffect(() => {
      dispatch(data());
   }, [dispatch]);
   // setTimeout(() => {
   //    isLoading(false);
   // }, 1000);
   return isLoading ? (
      <Loader />
   ) : (
      <>
         <div className='main-container flex flex-col gap-4'>
            <div className='flex justify-between'>
               <h1 className='title text-secondary-dark'>Home</h1>
               {user?.map((us: any) => (
                  <div key={us._id} className='h-16 w-16 rounded-full overflow-hidden'>
                     <img
                        src={`${
                           us.avatar.length > 17
                              ? us.avatar
                              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                        }`}
                        alt='Profile picture'
                        className='object-cover h-full'
                     />
                  </div>
               ))}
            </div>
        </div>
        <HomeExperience />
        <HomeHabits />
        <HomeFriends />
      <Navbar />
       {/* <Confetti
        numberOfPieces={party ? 300 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setParty(false);
          confetti.reset();
        }}
      /> */}
    </>
  );
};

export default Home;
