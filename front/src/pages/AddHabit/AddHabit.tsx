import { Habit, Header, Loader, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Key, useEffect, useState } from 'react';
import { getHabits, getUser } from '../../redux/features';
const AddHabit = () => {
   const { isLoading, habits } = useAppSelector((state) => state.habits);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getHabits());
   }, []);

   //    console.log(habits);
   // console.log(habits.map((habit: { _id: any[]; }) => habit._id.map((id: any) => id)));
   return isLoading ? (
      <Loader />
   ) : (
      <>
         <div className='main-container flex flex-col gap-4'>
            <Header title='New Habit' />
            {habits?.map(
               (habit: {
                  _id: number;
                  name: string;
                  description: string;
                  experience: number;
               }) => {
                  return (
                     <Habit key={habit.name} name={habit.name} id={habit._id} />
                  );
               }
            )}
         </div>
         <Navbar />
      </>
   );
};

export default AddHabit;

//  <Habit
//     key={habit?._id}
//     _id={habit?._id}
//     name={habit.name}
//     frequency={habit.frequency}
//     category={habit.category}
//     description={habit.description}
//  />
