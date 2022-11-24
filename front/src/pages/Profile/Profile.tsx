import { Header, Navbar } from '../../components';
import profilePicture from '../../assets/profile.jpg';
import { GiTrophyCup } from 'react-icons/gi';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../redux/features';

const Profile = () => {
   // const habits = useAppSelector((state) => state.user.habits);
   const dispatch = useAppDispatch();
   const initialUser = useCallback(async () => {
      await dispatch(getUser());
   }, [dispatch]);
   useEffect(() => {
      initialUser();
   }, []);
   const { user } = useAppSelector((state) => state.user);
   console.log(user);

   return (
      <>
         <div className='main-container flex flex-col gap-4 mb-7 '>
            <Header title='My Profile' editUrl={'/'} />
            <div className='grid justify-items-center mt-4'>
               <div className='h-16 w-16 rounded-full overflow-hidden mb-3 '>
                  <img
                     src={profilePicture}
                     alt='Profile picture'
                     className='object-cover h-full'
                  />
               </div>
               <h1>Johana asdasdDoe</h1>
               <h2 className='text-secondary-regular'>
                  Email.comsdakshdklj@gmail.com
               </h2>
            </div>
            <div>
               <h2 className='home-title'>Progress</h2>
               <div className='relative h-1 w-full  bg-primary-light rounded-full'></div>
               <div className='grid gap-3 mt-3'>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <p className='font-bold text-red-700'>5 days</p>
                  </div>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <p className='font-bold text-red-700'>5 days</p>
                  </div>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <p className='font-bold text-red-700'>5 days</p>
                  </div>
               </div>
            </div>
            <div>
               <h2 className='home-title'>Trophys</h2>
               <div className='relative h-1 w-full  bg-primary-light rounded-full '></div>
               <div className='grid gap-3 mt-3'>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <GiTrophyCup className='text-xl text-gray-400' />
                  </div>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <GiTrophyCup className='text-xl text-gray-400' />
                  </div>
                  <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                     <h3 className='text-secondary-dark'>Habit Streak</h3>
                     <GiTrophyCup className='text-xl text-gray-400' />
                  </div>
               </div>
            </div>
            <div className='flex flex-col m-5 gap-3 home-title'>
               <button className='rounded-xl border-primary-light border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors'>
                  log out
               </button>
               <button className='p-1'>delete account</button>
            </div>
         </div>
         <Navbar />
      </>
   );
};

export default Profile;
