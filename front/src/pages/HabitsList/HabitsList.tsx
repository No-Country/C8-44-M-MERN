import { Habit, Loader, Navbar } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { HiPlus } from 'react-icons/hi';
import { getUser } from '../../redux/features';
import { Link } from 'react-router-dom';
import { useDimensions } from '../../hooks';


const habitsList = [
	{
		"_id": "638e3c16e90a453b8e44dfd1",
		"name": "Learn a new lenguaje",
		"description": "English? Spanish? Portuguese? choose one!",
		"category": "Education",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638e3c1d13401732b3b1653e",
		"name": "Floss",
		"description": "Floss my teeth every day",
		"category": "Health",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638e3c51e90a453b8e44dfd3",
		"name": "Read a book",
		"description": "try to read 20 pages of a book per day",
		"category": "Education",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638e3c5813401732b3b16540",
		"name": "Walk 10 km",
		"description": "Walk in the park until reaching 10 km",
		"category": "Health",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638e3cd013401732b3b16542",
		"name": "Meditation",
		"description": "Meditate for 5 minutes",
		"category": "Health",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638e3cd2e90a453b8e44dfd5",
		"name": "listen to an hour of podcasts",
		"description": "it's a good way to learn",
		"category": "Education",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	},
	{
		"_id": "638f7a47822e2f1b026f2938",
		"name": "listen to an hour of podcasts2",
		"description": "it's a good way to learn2",
		"category": "Education",
		"experience": 0,
		"frecuency": "each day",
		"isDone": false,
		"__v": 0
	}
]

const HabitsList = () => {
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const [selectedOrder, setSelectedOrder] = useState('proximity');
  const [searchResult, setSearchResult] = useState(user.habits);
  const { lg } = useDimensions()
  const sizeExperience = lg? 100: 35

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
          showBack={!lg}
          title="Habits List"
          editUrl={`${!lg ?'/add-habits': ''}`}
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
        <Link to="/add-habits" className="hidden lg:block lg:w-44 lg:text-center lg:mt-6 lg:self-end">
          <button className="btn btn-primary">Add habit</button>
        </Link>
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
        <div className="fixed bottom-24 lg:top-60 z-10">
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
      {/* <Navbar /> */}
    </>
  );
};

export default HabitsList;
