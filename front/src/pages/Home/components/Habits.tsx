import { Habit } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';

const Habits = ({ user }: any) => {
  /* const { isLoading, isSuccess, isError, user } = useAppSelector(
    (state) => state.user
  ); */
  return (
    <div className="lg:w-7/12 lg:flex lg:flex-col lg:justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="home-title">Habits</h2>
          <Link to="/add-habits" className="lg:hidden">
            <HiPlus className="text-primary-light text-lg" />
          </Link>
        </div>
        <div className="relative h-1 w-full bg-secondary-light rounded-full dark:bg-secondary-regular">
          <div className="absolute w-1/3 bg-primary-dark rounded-full"></div>
        </div>
        <ul>
          {user?.habits.length !== 0 ? (
            user?.habits.map((habit: any) => (
              <li key={habit._id} className="first-of-type:mt-5">
                <Habit
                  _id={habit._id}
                  name={habit.name}
                  frequency={habit.frequency}
                  category={habit.category}
                  description={habit.description}
                  showChecked={true}
                  experience={habit.experience}
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
