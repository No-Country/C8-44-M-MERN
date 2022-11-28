import { Habit, Navbar } from "../../components";

import Header from "../../components/Header";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const habitsList = [
  {
    id: 1,
    habitName: "Brush your teeth",
    frequency: 1,
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
    habitName: "Cycle for 1h",
    frequency: 1,
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
    frequency: 30,
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
    frequency: 1,
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
    frequency: 1,
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
  const [selectedOrder, setSelectedOrder] = useState("proximity");
  const [searchResult, setSearchResult] = useState(habitsList);

  const OrderBy = (order: string, habits: any) => {
    switch (order) {
      case "proximity":
        return [...habits];
      case "name":
        return [...habits].sort((a, b) => (a.habitName > b.habitName ? 1 : -1));
      case "frequency":
        return [...habits].sort((a, b) => a.frequency - b.frequency);
      case "category":
        return [...habits].sort((a, b) => (a.category > b.category ? 1 : -1));
      case "level":
        return [...habits].sort(
          (a, b) => b.experience.level - a.experience.level
        );
      case "priority":
        return [...habits].sort((a, b) => b.priority - a.priority);
      default:
        return [...habits];
    }
  };

  const handleSearch = (e: any, habits: any) => {
    setSearchResult(
      [...habits].filter((habit: any) =>
        habit.habitName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

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
            type="text"
            onKeyUp={(e) => {
              handleSearch(e, habitsList);
            }}
          />
        </div>
        <div>
          {OrderBy(selectedOrder, searchResult).map((habit) => (
            <Habit
              key={habit.id}
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
          <select
            value={selectedOrder}
            name="order"
            className="text-secondary-dark"
            onChange={(e) => setSelectedOrder(e.target.value)}
          >
            <option value="proximity">proximity</option>
            <option value="frequency">frequency</option>
            <option value="category">category</option>
            <option value="level">level</option>
            <option value="priority">priority</option>
            <option value="name">name</option>
          </select>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default HabitsList;
