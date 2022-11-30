import { Header, Loader, Navbar } from '../../components';
import { HomeExperience, HomeFriends, HomeHabits } from './components';
import Confetti from 'react-confetti';
import { Link, useNavigate } from 'react-router-dom';
import profilePicture from '../../assets/profile.jpg';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';

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
      <div className="main-container flex flex-col gap-4">
        <div className="flex justify-between">
          <h1
            className="title text-secondary-dark"
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
          confetti?.reset();
        }}
      />
    </>
  );
};

export default Home;
