import { Habit, Loader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { Habit as HabitType } from '../../models';
import Header from '../../components/Header';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/features';
import { useDimensions } from '../../hooks';

const HabitsList = () => {
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const [selectedOrder, setSelectedOrder] = useState('name');
  const [searchResult, setSearchResult] = useState(user.habits);
  const { lg } = useDimensions();
  const sizeExperience = lg ? 100 : 35;

  useEffect(() => {
    user.email === '' && dispatch(getUser());
  }, []);

  useEffect(() => {
    setSearchResult(user.habits);
  }, [user]);

  const OrderBy = (order: string, habits: HabitType[]) => {
    switch (order) {
      case 'name':
        return [...habits].sort((a, b) => a.name.localeCompare(b.name));
      case 'level':
        return [...habits].sort(
          (a, b) =>
            Math.ceil(b.experience / 100) - Math.ceil(a.experience / 100)
        );
      case 'category':
        return [...habits].sort((a, b) => (a.category > b.category ? 1 : -1));
      case 'completed':
        return [...habits].sort((a, b) => (a.isDone > b.isDone ? 1 : -1));
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
          showBack={!lg}
          title="Habits List"
          editUrl={`${!lg ? '/add-habits' : ''}`}
          icon={<HiPlus className="text-primary-dark w-5 h-5" />}
        />
        <div>
          <input
            id="search"
            placeholder="Search habits"
            className="w-full rounded-md border-secondary-light border-2 p-2 mt-6 text-secondary-dark dark:bg-secondary-dark dark:border-none"
            type="text"
            onKeyUp={(e) => {
              handleSearch(e, user.habits);
            }}
          />
        </div>
        <div className="flex justify-between items-center lg:mt-6">
          <div className="fixed bottom-24 z-10 lg:relative lg:bottom-0">
            <label className="text-secondary-regular">Order by</label>
            <select
              value={selectedOrder}
              name="order"
              className="text-secondary-dark dark:bg-transparent dark:text-secondary-light"
              onChange={(e) => setSelectedOrder(e.target.value)}
            >
              <option value="name">name</option>
              <option value="level">level</option>
              <option value="completed">completed</option>
              <option value="category">category</option>
            </select>
          </div>
          <Link
            to="/add-habits"
            className="hidden lg:block lg:w-44 lg:text-center lg:self-end"
          >
            <button className="btn btn-primary">Add habit</button>
          </Link>
        </div>

        <div className="lg:mt-6 lg:grid lg:grid-cols-4 lg:justify-items-center lg:gap-8 lg:items-start">
          {OrderBy(selectedOrder, searchResult).map((habit) => (
            <Habit
              key={habit._id}
              _id={habit._id}
              name={habit.name}
              frequency={habit.frequency}
              category={habit.category}
              description={habit.description}
              experience={habit.experience}
              sizeExperience={sizeExperience}
              isDone={habit.isDone}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HabitsList;
