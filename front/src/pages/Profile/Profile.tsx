import { Header, Navbar } from '../../components';
import profilePicture from '../../assets/profile.jpg';
import { GiToken, GiTrophyCup } from 'react-icons/gi';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { data } from '../../redux/features/data/dataSlice';

const Profile = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { isLoading, isSuccess, user } = useAppSelector((state) => state.data);
   useEffect(() => {
      dispatch(data());
 
   }, []);
   // console.log(user);

   const logoutHandler = () => {
      dispatch(logout());
      navigate('/login');
   };
   return (
      <>
         <div className='main-container flex flex-col gap-4 mb-7 '>
            <Header title='My Profile' editUrl={'/'} />
            {user?.map((us: any) => (
               <div key={us._id}>
                  <div className='grid justify-items-center mt-4'>
                     <div className='h-16 w-16 rounded-full overflow-hidden mb-3 '>
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
                     <h1>{us.fullname}</h1>
                     <h2 className='text-secondary-regular'>{us.email}</h2>
                  </div>
                  <div>
                     <h2 className='home-title'>Progress</h2>
                     <div className='relative h-1 w-full  bg-primary-light rounded-full'></div>
                     <div className='grid gap-3 mt-3'>
                        {us.habilits?.length ? (
                           <div className='flex items-center justify-between text-sm rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                              <h3 className='text-secondary-dark'>
                                 Habit Streak
                              </h3>
                              <p className='font-bold text-red-700'>5 days</p>
                           </div>
                        ) : (
                           <div className='items-center justify-between text-sm  rounded-full bg-secondary-light/30 w-full py-4 px-6'>
                              <h3 className='text-secondary-dark text-center'>
                                 No Habits
                              </h3>
                           </div>
                        )}
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
                     <button
                        onClick={logoutHandler}
                        className='rounded-xl border-primary-light border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors'>
                        log out
                     </button>
                     <button className='p-1'>delete account</button>
                  </div>
               </div>
            ))}
         </div>
         <Navbar />
      </>
   );
};

export default Profile;
