import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Habit, Header, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { habits } from '../../redux/features/habits/habitsSlice';
import { BsSearch } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
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
   const [selectedOrder, setSelectedOrder] = useState('proximity');
   const [searchResult, setSearchResult] = useState(habitys);

   const OrderBy = (order: string, habits: any) => {
      switch (order) {
         case 'proximity':
            return [...habits];
         case 'name':
            return [...habits].sort((a, b) =>
               a.habitName > b.habitName ? 1 : -1
            );
         case 'frequency':
            return [...habits].sort((a, b) => a.frequency - b.frequency);
         case 'category':
            return [...habits].sort((a, b) =>
               a.category > b.category ? 1 : -1
            );
         case 'level':
            return [...habits].sort(
               (a, b) => b.experience.level - a.experience.level
            );
         case 'priority':
            return [...habits].sort((a, b) => b.priority - a.priority);
         default:
            return [...habits];
      }
   };

   const handleSearch = (e: any, habits: any) => {
      setSearchResult(
         [...habits].filter((habit: any) =>
            habit.habitName.toLowerCase().includes(e.target.value.toLowerCase())
         )
      );
   };

   return (
      <>
         <div className='main-container flex flex-col gap-4'>
            <Header
               title='Habits List'
               editUrl={'/add-habits'}
               //  icon={<HiPlus className='text-primary-dark w-5 h-5' />}
            />
            <div>
               <input
                  id='search'
                  placeholder='Search habits'
                  className='w-full rounded-full border-secondary-light border-2 p-2 mt-6 text-secondary-dark'
                  type='text'
                  onKeyUp={(e) => {
                     //  handleSearch(e); //habitsList
                  }}
               />
            </div>
            <div className=''>
               {/* {OrderBy(selectedOrder, searchResult).map((habit) => ( */}
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
            <div className='fixed bottom-24 z-10'>
               <label className='text-secondary-regular'>Order by</label>
               <select
                  value={selectedOrder}
                  name='order'
                  className='text-secondary-dark'
                  onChange={(e) => setSelectedOrder(e.target.value)}>
                  <option value='proximity'>proximity</option>
                  <option value='frequency'>frequency</option>
                  <option value='category'>category</option>
                  <option value='level'>level</option>
                  <option value='priority'>priority</option>
                  <option value='name'>name</option>
               </select>
            </div>
         </div>
         <Navbar />
      </>
   );
};
export default HabitsList;
