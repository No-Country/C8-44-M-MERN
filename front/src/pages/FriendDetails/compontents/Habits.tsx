import { Habit as HabitType, User } from '../../../models';

import { Habit } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  user: User;
}

const Habits = ({ user }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="home-title">Habits</h2>
      </div>
      <div className="relative h-1 w-full bg-secondary-light rounded-full dark:bg-secondary-regular"></div>
      <ul className="pt-2">
        {user.habits && user.habits.length > 0 ? (
          user.habits.map((habit: HabitType) => (
            <li key={habit._id}>
              <Habit
                _id={habit._id}
                name={habit.name}
                experience={habit.experience}
                isDone={habit.isDone}
                description={habit.description}
                category={habit.category}
                frequency={habit.frequency}
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
  );
};

export default Habits;
