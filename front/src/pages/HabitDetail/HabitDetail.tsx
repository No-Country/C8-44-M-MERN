import { ExperienceRing, Header, Loader, Navbar } from '../../components';
import { getHabitById, getUser } from '../../redux/features';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Details } from './components';
import { Habit } from '../../models';
import { tempColorAssing } from '../../utils/changeColor';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HabitDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  /* useEffect(() => {
    const habit = async () => {
      await dispatch(getHabitById(id!));
    };
    habit();
  }, []); */
  const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  );

  const habit: Habit = user.habits.find((habit) => habit._id === id) || {
    name: '',
    description: '',
    category: '',
    frequency: 'once a day',
    _id: '',
    isDone: false,
    experience: 0,
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-9  dark:bg-gray-800">
        <Header title="Habit Details" editUrl="" />
        <div className="lg:mt-28 ">
          <p className="text-center font-bold text-3xl lg:text-left dark:text-white">
            {habit.name}
          </p>
          <div className="lg:flex flex-row-reverse lg:items-center lg:mt-1 ">
            <div className="flex flex-col items-center lg:w-1/2">
              <ExperienceRing
                textColor={`${tempColorAssing(1, 'class')}`}
                experience={habit.experience}
                color={tempColorAssing(1, 'hex')}
                size={260}
              />
            </div>
            <Details
              frequency={
                habit.frequency !== undefined ? habit.frequency : 'once a day'
              }
              category={habit.category}
              description={habit.description}
            />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default HabitDetail;
