import { CiCirclePlus } from 'react-icons/ci';
import { Friend } from '../../../components';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { User } from '../../../models';

interface Props {
  user: User;
}

const Friends = ({ user }: Props) => {
  return (
    <div className="mb-10 lg:w-2/12 mt-10 lg:mt-0">
      <div className="flex justify-between items-center">
        <h2 className="home-title">Friends</h2>
        <Link to="/friends" className="lg:hidden">
          <HiPlus className="text-primary-light text-lg" />
        </Link>
      </div>
      <div className="relative h-1 w-1/ bg-secondary-light rounded-full dark:bg-secondary-regular lg:mb-4"></div>
      {user.followers.length !== 0 ? (
        <>
          {user.followers.map((friend: User) => (
            <Friend
              key={friend._id}
              _id={friend._id}
              username={friend.username}
              avatar={friend.avatar}
              fullname={friend.fullname}
              rol={friend.rol}
              followers={friend.followers}
              habits={friend.habits}
              email={friend.email}
              healthExperience={friend.healthExperience}
              educationExperience={friend.educationExperience}
              experience={friend.experience}
            />
          ))}
          <Link to="/friends" className="hidden lg:block">
            <CiCirclePlus className="text-primary-light text-5xl w-full mt-4" />
          </Link>
        </>
      ) : (
        <>
          <div className="items-center mt-5 justify-between text-sm  rounded-md bg-secondary-light/30 w-full py-4 px-6">
            <h3 className="text-secondary-dark text-center dark:text-secondary-light">
              No Friends
            </h3>
          </div>
          <Link to="/friends" className="hidden lg:block">
            <CiCirclePlus className="text-primary-light text-5xl w-full mt-4" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Friends;
