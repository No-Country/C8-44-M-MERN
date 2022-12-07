import { ExperienceRing, Header, Loader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Details } from './components';
import { Habit } from '../../models';
import { getUser } from '../../redux/features';
import { tempColorAssing } from '../../utils/changeColor';
import { useDimensions } from '../../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HabitDetail() {
  const { lg } = useDimensions();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    user.email === '' && dispatch(getUser());
  }, []);
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
        <div className="">
          <div className="lg:flex lg:items-center lg:gap-8 lg:w-1/2 lg:justify-between">
            <p className="text-center font-bold text-3xl lg:text-left dark:text-white">
              {habit.name}
            </p>
            <span className="hidden lg:block text-primary-dark font-bold text-xl">
              +10 exp
            </span>
          </div>

          <div className="lg:flex flex-row-reverse lg:items-center ">
            <div className="flex flex-col items-center lg:w-1/2">
              <p
                className={`hidden lg:-translate-y-8 lg:text-3xl lg:block lg:font-bold text-${tempColorAssing(
                  1,
                  'class'
                )}`}
              >
                Level {Math.ceil(habit.experience / 100)}
              </p>
              <ExperienceRing
                textColor={`${tempColorAssing(1, 'class')}`}
                experience={habit.experience}
                color={tempColorAssing(1, 'hex')}
                size={lg ? 380 : 260}
              />
            </div>
            <Details
              frequency={
                habit.frequency !== undefined ? habit.frequency : 'once a day'
              }
              category={habit.category}
              description={habit.description}
              isDone={habit.isDone}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HabitDetail;
