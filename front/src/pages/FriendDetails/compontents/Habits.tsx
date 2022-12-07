import { Habit } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import React from 'react';

const habitsList = [
  {
    id: '1',
    habitName: 'Brush your teeth',
    frequency: 'once a day',
    category: 'Health',
    description: 'Brush your teeth daily',
    priority: 3,
    experience: 50,
    isDone: true,
  },
  {
    id: '2',
    habitName: 'cycle for 1h',
    frequency: 'once a day',
    category: 'Health',
    description: 'cycle for 1h',
    priority: 5,
    experience: 20,
    isDone: true,
  },
  {
    id: '3',
    habitName: 'Medical check',
    frequency: 'once a month',
    category: 'Health',
    description: 'Medical check',
    priority: 3,
    experience: 0,
    isDone: false,
  },
  {
    id: '5',
    habitName: 'Go to the bed early',
    frequency: 'once a day',
    category: 'Health',
    description: 'Go to the bed early',
    priority: 3,
    experience: 10,
    isDone: false,
  },
  {
    id: '4',
    habitName: 'Read a book',
    frequency: 'once a day',
    category: 'Education',
    description: 'Read a book',
    priority: 3,
    experience: 20,
    isDone: false,
  },
];

const Habits = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="home-title">Habits</h2>
      </div>
      <div className="relative h-1 w-full bg-secondary-light rounded-full dark:bg-secondary-regular">
        <div className="absolute w-1/3 bg-primary-dark rounded-full"></div>
      </div>
      <ul className="pt-4">
        {habitsList.map((habit) => (
          <li key={habit.id}>
            <Habit
              _id={habit.id}
              name={habit.habitName}
              experience={habit.experience}
              isDone={habit.isDone}
              description={habit.description}
              category={habit.category}
              frequency={habit.frequency}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
