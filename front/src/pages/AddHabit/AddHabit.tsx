import { Header, Loader } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { addHabit, getHabits, getUser } from '../../redux/features';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

const AddHabit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, habits } = useAppSelector(
    (state) => state.habits
  );
  const user = useAppSelector((state) => state.user);
  const [selectedHabit, setSelectedHabit] = useState('');

  useEffect(() => {
    user.user.email === '' && dispatch(getUser());
    habits.length === 0 && dispatch(getHabits());
  }, []);

  const selectedHabitHandler = (habitId: string) => {
    setSelectedHabit(habitId);
  };

  const addHabitHandler = async () => {
    const response = await dispatch(addHabit(selectedHabit));
    if (response.payload.message) {
      toast.error(`The habit was already added`);
    } else {
      toast.success(`Habit added successfully`);
      navigate('/home');
    }
  };

  return isLoading || user.isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-8 dark:bg-gray-800">
        <Header title="Add Habit" editUrl="" />
        <ul className="lg:grid lg:grid-cols-4 lg:gap-5 2xl:gap-0">
          {habits.map((habit) => (
            <li key={habit._id}>
              <div
                style={{
                  border:
                    habit._id === selectedHabit
                      ? '1px solid'
                      : '1px solid transparent',
                }}
                onClick={() => selectedHabitHandler(habit._id)}
                className="flex flex-col items-center justify-center rounded-md bg-secondary-light/30 w-full my-3 
                lg:hover:bg-secondary-light lg:h-36 lg:w-36 xl:h-52 xl:w-52 2xl:h-44 2xl:w-60 cursor-pointer dark:bg-secondary-dark dark:lg:hover:bg-black/30"
              >
                <h3
                  className="text-sm text-center pl-5 p-3 text-secondary-dark dark:text-secondary-light 
                  lg:px-0 xl:px-5 lg:text-base xl:text-xl lg:text-primary-dark lg:font-normal 2xl:text-lg"
                >
                  {habit.name}
                </h3>
                <h4 className="hidden lg:block lg:text-sm h-24 text-center text-secondary-regular lg:mx-2 2xl:text-base 2xl:mx-5">
                  {habit.description}
                </h4>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-end xl:mt-8">
          <button
            className="border border-solid bg-primary-dark text-white font-bold h-10 rounded-md 
            lg:w-52 lg:h-12 xl:w-80 xl:h-16 2xl:w-56 2xl:h-12 dark:border-none 2xl:mr-4"
            disabled={!selectedHabit}
            onClick={addHabitHandler}
          >
            Add Habit
          </button>
          <Link
            className="border border-solid border-primary-dark text-primary-dark bg-white font-semibold 
            h-10 rounded-md text-center flex justify-center items-center 
            lg:w-52 lg:h-12 xl:w-80 xl:h-16 2xl:w-56 2xl:h-12 dark:border-none"
            to="/add-custom-habit"
          >
            <button>Create new Habit</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddHabit;
