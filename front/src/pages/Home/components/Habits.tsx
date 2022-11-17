import React from 'react'
import { Habit } from '../../../components'

const habitsList = [
  {
    id: 1,
    habitName: "Brush your teeth",
    frequency: "once a day",
    category: "Health",
    description: "Brush your teeth daily",
    priority: 3,
    experience: {
      progress: 50,
      level: 1,
    }
  },
  {
    id: 2,
    habitName: "cycle for 1h",
    frequency: "once a day",
    category: "Health",
    description: "cycle for 1h",
    priority: 5,
    experience: {
      progress: 30,
      level: 2,
    }
  },
  {
    id: 3,
    habitName: "Medical check",
    frequency: "once a month",
    category: "Health",
    description: "Medical check",
    priority: 3,
    experience: {
      progress: 40,
      level: 3,
    }
  },
  {
    id: 5,
    habitName: "Go to the bed early",
    frequency: "once a day",
    category: "Health",
    description: "Go to the bed early",
    priority: 3,
    experience: {
      progress: 90,
      level: 5,
    }
  },
  {
    id: 4,
    habitName: "Read a book",
    frequency: "once a day",
    category: "Education",
    description: "Read a book",
    priority: 3,
    experience: {
      progress: 60,
      level: 2,
    }
  },
]

const Habits = () => {
  return (
    <div>
      <h2 className="mb-1 text-primary-light">Habits</h2>
      <div className="relative h-1 w-full bg-secondary-light rounded-full">
        <div className="absolute h-1 w-16 bg-primary-dark rounded-full"></div>
      </div>
      <ul className='pt-4'>
        {habitsList.map((habit) => (
          <li key={habit.id}>
            <Habit 
            habitName={habit.habitName}
            frequency={habit.frequency}
            category={habit.category}
            description={habit.description}
            priority={habit.priority}
            experience={habit.experience}
          />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Habits