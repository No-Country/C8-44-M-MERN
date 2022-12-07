import { Habit, Loader, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { HiPlus } from 'react-icons/hi';
import { getUser } from '../../redux/features';

const HabitsList = () => {
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const [selectedOrder, setSelectedOrder] = useState('proximity');
  const [searchResult, setSearchResult] = useState(user.habits);
  useEffect(() => {
    user.email === '' && dispatch(getUser());
  }, []);
  useEffect(() => {
    setSearchResult(user.habits);
  }, [user]);

  const OrderBy = (order: string, habits: any) => {
    switch (order) {
      case 'proximity':
        return [...habits];
      case 'name':
        return [...habits].sort((a, b) => a.name.localeCompare(b.name));
      case 'frequency':
        return [...habits].sort((a, b) => a.frequency - b.frequency);
      case 'category':
        return [...habits].sort((a, b) => (a.category > b.category ? 1 : -1));
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
      habits.filter((habit: any) =>
        habit.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 dark:bg-gray-800">
        <Header
          title="Habits List"
          editUrl={'/add-habits'}
          icon={<HiPlus className="text-primary-dark w-5 h-5" />}
        />
        <div>
          <input
            id="search"
            placeholder="Search habits"
            className="w-full rounded-full border-secondary-light border-2 p-2 mt-6 text-secondary-dark dark:bg-secondary-dark dark:border-none"
            type="text"
            onKeyUp={(e) => {
              handleSearch(e, user.habits);
            }}
          />
        </div>
        <div>
          {OrderBy(selectedOrder, searchResult).map((habit) => (
            <Habit
              key={habit._id}
              _id={habit._id}
              name={habit.name}
              frequency={habit.frequency}
              category={habit.category}
              description={habit.description}
              experience={habit.experience}
              isDone={habit.isDone}
            />
          ))}
        </div>
        <div className="fixed bottom-24 z-10">
          <label className="text-secondary-regular">Order by</label>
          <select
            value={selectedOrder}
            name="order"
            className="text-secondary-dark dark:bg-transparent dark:text-secondary-light"
            onChange={(e) => setSelectedOrder(e.target.value)}
          >
            <option value="proximity">proximity</option>
            <option value="frequency">frequency</option>
            <option value="category">category</option>
            <option value="level">level</option>
            <option value="priority">priority</option>
            <option value="name">name</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default HabitsList;
