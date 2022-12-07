import { Header, Loader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { HabitForm } from './components';
import { getUser } from '../../redux/features';
import { useEffect } from 'react';

const AddCustomHabit = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );
  useEffect(() => {
    user.email === '' && dispatch(getUser());
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="main-container flex flex-col gap-4 dark:bg-gray-800">
      <Header title="Add Custom Habit" />
      <HabitForm />
    </div>
  );
};

export default AddCustomHabit;
