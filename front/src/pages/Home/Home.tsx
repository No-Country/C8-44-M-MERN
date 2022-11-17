import { HomeExperience, HomeFriends } from "./components";
import { Loader, Navbar } from "../../components";

import profilePicture from "../../assets/profile.jpg";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="title text-secondary-dark">Home</h1>
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img
              src={profilePicture}
              alt="Profile picture"
              className="object-cover h-full "
            />
          </div>
        </div>
        <HomeExperience />
        <HomeFriends />
      </div>
      <Navbar />
    </>
  );
};

export default Home;