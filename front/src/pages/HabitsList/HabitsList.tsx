import { Habit, Navbar } from "../../components";

import Header from "../../components/Header";
import { HiPlus } from "react-icons/hi";

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
    },
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
    },
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
    },
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
    },
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
    },
  },
];
const HabitsList = () => {
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header
          title="Habits List"
          editUrl={"/add-habits"}
          icon={<HiPlus className="text-primary-dark w-5 h-5" />}
        />
        <div>
          <input
            id="search"
            placeholder="Search habits"
            className="w-full rounded-full border-secondary-light border-2 p-2 mt-6 text-secondary-dark"
          />
        </div>
        <div>
          {habitsList.map((habit) => (
            <Habit
              id={habit.id}
              habitName={habit.habitName}
              frequency={habit.frequency}
              category={habit.category}
              description={habit.description}
              priority={habit.priority}
              experience={habit.experience}
            />
          ))}
        </div>
        <div className="fixed bottom-24 z-10">
          <label className="text-secondary-regular">Order by</label>
          <select name="order" className="text-secondary-dark">
            <option value="proximity" selected>
              proximity
            </option>
            <option value="frequency">frequency</option>
            <option value="category">category</option>
            <option value="level">level</option>
            <option value="priority">priority</option>
          </select>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default HabitsList;
