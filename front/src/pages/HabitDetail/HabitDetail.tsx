import { ExperienceRing, Header, Loader, Navbar } from '../../components';
import profilePicture from '../../assets/profile.jpg';
import { Details } from './components';
import { tempColorAssing } from '../../utils/changeColor';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getHabitById, getUser } from '../../redux/features';

function HabitDetail() {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   useEffect(() => {
      const habit = async () => {
         await dispatch(getHabitById(id!));
      };
      habit();
   }, []);
   const { isLoading, isSuccess, isError, habit } = useAppSelector(
      (state) => state.habit
   );
   type Habit = {
      name: string;
      experience: number;
      frecuency: string;
      category: string;
      description: string;
   };
   const { name, experience, frecuency, category, description } =
      habit as Habit;
   return isLoading ? (
      <Loader />
   ) : (
      <>
         <div className='main-container flex flex-col gap-9  dark:bg-gray-800'>
            <Header title='Habit Details' />
            <div className='lg:mt-28 '>
               <p className='text-center font-bold text-3xl lg:text-left dark:text-white'>
                  {name}
               </p>
               <div className='lg:flex flex-row-reverse lg:items-center lg:mt-1 '>
                  <div className='flex flex-col items-center lg:w-1/2'>
                     <ExperienceRing
                        textColor={`${tempColorAssing(experience, 'class')}`}
                        experience={experience}
                        color={tempColorAssing(experience, 'hex')}
                     />
                  </div>
                  <Details
                     frecuency={frecuency}
                     category={category}
                     description={description}
                  />
               </div>
            </div>
         </div>
         <Navbar />
      </>
   );
}

export default HabitDetail;
