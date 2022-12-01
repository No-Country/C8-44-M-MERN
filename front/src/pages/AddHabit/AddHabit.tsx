import { Header, Navbar } from "../../components";

const AddHabit = () => {
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header title="New Habit" />
      </div>
      <Navbar />
    </>
  );
};

export default AddHabit;
