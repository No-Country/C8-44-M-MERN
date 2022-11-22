import { Friend } from "../../../components";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const friendsList = [
  {
    name: "César Herrera",
    email: "herrera.cesar.arg@gmail.com",
    photo: "https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg",
  },
  {
    name: "José Carlos del Valle",
    email: "seck.dv15@gmail.com",
    photo: "https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg",
  },
  {
    name: "Nathalia Riascos",
    email: "riascosnathalia6@gmail.com",
    photo: "https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg",
  },
];

const Friends = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h2 className="home-title">Friends</h2>
        <Link to="/friends">
          <HiPlus className="text-primary-light text-lg" />
        </Link>
      </div>
      <div className="relative h-1 w-1/ bg-secondary-light rounded-full">
        <div className="absolute w-1/3 bg-primary-dark rounded-full"></div>
      </div>
      {friendsList.map((friend) => {
        return (
          <Friend
            key={friend.email}
            id={friend.email}
            name={friend.name}
            pictureUrl={friend.photo}
          />
        );
      })}
    </div>
  );
};

export default Friends;
