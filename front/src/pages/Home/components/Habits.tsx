import { Habit as HabitType, User } from '../../../models';

import { Habit } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
}

const Habits = ({ user }: Props) => {
  return (
    <div className="lg:w-7/12 lg:flex lg:flex-col lg:justify-between mt-6 lg:mt-0">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="home-title">Habits</h2>
          <Link to="/add-habits" className="lg:hidden">
            <HiPlus className="text-primary-light text-lg" />
          </Link>
        </div>
        <div className="relative h-1 w-full bg-secondary-light rounded-full dark:bg-secondary-regular"></div>
        <ul>
          {user.habits && user.habits.length > 0 ? (
            user.habits.map((habit: HabitType) => (
              <li key={habit._id} className="first-of-type:mt-5">
                <Habit
                  _id={habit._id}
                  name={habit.name}
                  frequency={habit.frequency}
                  category={habit.category}
                  description={habit.description}
                  experience={habit.experience}
                  isDone={habit.isDone}
                />
              </li>
            ))
          ) : (
            <div className="items-center mt-5 justify-between text-sm  rounded-md bg-secondary-light/30 w-full py-4 px-6">
              <h3 className="text-secondary-dark text-center dark:text-secondary-light">
                No Habits
              </h3>
            </div>
          )}
        </ul>
      </div>
      <div className=" gap-4 hidden lg:flex">
        <Link to="/add-habits" className="w-full">
          <button className="btn btn-primary">Add habit</button>
        </Link>
        <Link to="/habits" className="w-full">
          <button className="btn btn-primary">See habit list</button>
        </Link>
      </div>
    </div>
  );
};

export default Habits;
