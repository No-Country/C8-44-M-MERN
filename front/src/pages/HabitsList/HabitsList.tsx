import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Habit, Header, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { habits } from '../../redux/features/habits/habitsSlice';
import { BsSearch } from 'react-icons/bs';
const HabitsList = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { isLoading, isSuccess, habitys } = useAppSelector(
      (state) => state.habits
   );
   useEffect(() => {
      dispatch(habits());
   }, []);
  //  console.log(habitys);

   return (
      <>
         <div className='main-container flex flex-col gap-4'>
            <Header title='Habits List' editUrl={'/'} />
            <div className='flex items-center my-3 bg-secondary-light/30 rounded-full px-5'>
               <BsSearch size={20} className='text-secondary-regular'/>
               <input
                  type='text '
                  placeholder='Search Habits'
                  className=' w-full py-3 px-3 bg-transparent outline-none'
               />
            </div>
            <div className=''>
               {habitys?.map((habit: any) => (
                  <Habit
                     key={habit._id}
                     id={habit._id}
                     habitName={habit.name}
                     frequency={habit.frequency}
                     category={habit.category}
                     description={habit.description}
                     priority={habit.priority}
                     experience={habit.experience}
                  />
               ))}
            </div>
         </div>
         <Navbar />
      </>
   );
};

export default HabitsList;
