import { Friend, Loader } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFollowers, getUser } from '../../../redux/features';
import { useEffect } from 'react';

// const friendsList = [
//    {
//       id: '1',
//       name: 'César Herrera',
//       email: 'herrera.cesar.arg@gmail.com',
//       photo: 'https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg',
//    },
//    {
//       id: '2',
//       name: 'José Carlos del Valle',
//       email: 'seck.dv15@gmail.com',
//       photo: 'https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg',
//    },
//    {
//       id: '3',
//       name: 'Nathalia Riascos',
//       email: 'riascosnathalia6@gmail.com',
//       photo: 'https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg',
//    },
// ];

const Friends = ({ user }) => {
   const dispatch = useAppDispatch();
   // const { isLoading, isSuccess, isError, user } = useAppSelector(
   //    (state) => state.user
   // );
   useEffect(() => {
      !user && dispatch(getFollowers());
   }, []);
   return (
      <div className='mb-10'>
         <div className='flex justify-between items-center'>
            <h2 className='home-title'>Friends</h2>
            <Link to='/friends'>
               <HiPlus className='text-primary-light text-lg' />
            </Link>
         </div>
         <div className='relative h-1 w-1/ bg-secondary-light rounded-full dark:bg-secondary-regular'>
            <div className='absolute w-1/3 bg-primary-dark rounded-full'></div>
         </div>
         {user?.followers?.length ? (
            user?.followers?.map((f) => (
               <Friend
                  key={f.id}
                  id={f.id}
                  name={f.name}
                  pictureUrl={f.photo}
               />
            ))
         ) : (
            <div className='items-center mt-5 justify-between text-sm  rounded-md bg-secondary-light/30 w-full py-4 px-6'>
               <h3 className='text-secondary-dark text-center dark:text-secondary-light'>
                  No Friends
               </h3>
            </div>
         )}
      </div>
   );
};

export default Friends;
