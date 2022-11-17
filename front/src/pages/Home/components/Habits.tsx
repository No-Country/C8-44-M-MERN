import React from 'react'
import { Habit } from '../../../components'

const habitsList = [
  {
    habitName: "Brush your teeth",
    frequency: "once a day",
    category: "Health",
    description: "Brush your teeth daily",
    priority: 3
  },
  {
    habitName: "cycle for 1h",
    frequency: "once a day",
    category: "Health",
    description: "cycle for 1h",
    priority: 3
  },
  {
    habitName: "Medical check",
    frequency: "once a day",
    category: "Health",
    description: "Medical check",
    priority: 3
  },
  {
    habitName: "Read a book",
    frequency: "once a day",
    category: "Health",
    description: "Read a book",
    priority: 3
  },
  {
    habitName: "Go to the bed early",
    frequency: "once a day",
    category: "Health",
    description: "Go to the bed early",
    priority: 3
  },
]

const Habits = () => {
  return (
    <div>
      Habits
      <div>
        <Habit />
      </div>
    </div>
  )
}

export default Habits