import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Loader, Navbar } from "../../components";
import { addHabit, getHabits } from "../../redux/features";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const AddHabit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHabits());
  }, []);

  const habitsList = useAppSelector((state) => state.habits);
  const [selectedHabit, setSelectedHabit] = useState("");

  const selectedHabitHandler = (habitId) => {
    if (!selectedHabit.includes(habitId)) {
      setSelectedHabit(habitId);
    }
  };

  const addHabitHandler = async () => {
    await dispatch(addHabit(selectedHabit));
    navigate("/home");
  }

  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header title="Add Habit" />
        <ul>
          {habitsList.habits.map((habit) => (
            <li key={habit?._id}>
              <div
                style={{
                  border: habit?._id === selectedHabit ? "1px solid" : "",
                }}
                onClick={() => selectedHabitHandler(habit?._id)}
                className="items-center justify-between rounded-md bg-secondary-light/30 w-full my-3"
              >
                <h3 className="text-sm text-center pl-5 p-3 text-secondary-dark dark:text-secondary-light">
                  {habit?.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="border border-solid bg-primary-dark text-secondary-light font-bold h-10 rounded-xl"
          disabled={!selectedHabit}
          onClick={addHabitHandler}
        >
          Add Habit
        </button>
        <Link to="/add-custom-habit">
          <button className="border border-solid border-primary-dark text-primary-dark bg-white font-semibold h-10 rounded-xl">
            Create new Habit
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddHabit;
