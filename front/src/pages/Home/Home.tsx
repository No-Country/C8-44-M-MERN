import { Header, Loader, Navbar } from '../../components';
import { HomeExperience, HomeFriends, HomeHabits } from './components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Confetti from 'react-confetti';
import profilePicture from '../../assets/profile.jpg';
import { useAppSelector } from '../../redux/hooks';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [party, setParty] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container flex flex-col gap-4 dark:bg-secondary-dark">
        <div className="flex justify-between">
          <h1
            className="title text-secondary-dark dark:text-neutral-300"
            onClick={() => setParty(true)}
          >
            Home
          </h1>
          <Link to="/profile">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img
                src={profilePicture}
                alt="Profile picture"
                className="object-cover h-full "
              />
            </div>
          </Link>
        </div>
        <HomeExperience />
        <HomeHabits />
        <HomeFriends />
      </div>
      <Navbar />
      <Confetti
        numberOfPieces={party ? 300 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setParty(false);
          confetti.reset();
        }}
      />
    </>
  );
};

export default Home;
