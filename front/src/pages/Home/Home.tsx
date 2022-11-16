import { HomeExperience } from "./components";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <div className="main-container flex flex-col">
        <h1 className="title text-secondary-dark">Home</h1>
        <img src={""} alt="" />
        <HomeExperience />
      </div>
      <Navbar />
    </>
  );
};

export default Home;