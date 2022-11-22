import { Header, Navbar } from "../../components";

const HabitsList = () => {
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header title="Habits List" editUrl={"/"} />
      </div>
      <Navbar />
    </>
  );
};

export default HabitsList;
