import { Friend } from "../../../components";
import { HiPlus } from "react-icons/hi";

const friendsList = [
  {
    name: "César Herrera",
    email: "herrera.cesar.arg@gmail.com",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "José Carlos del Valle",
    email: "seck.dv15@gmail.com",
    photo: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
  },
  {
    name: "Nathalia Riascos",
    email: "riascosnathalia6@gmail.com",
    photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
  },
];

const Friends = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h2 className="mb-1 text-primary-light">Friends</h2>
        <HiPlus className="text-primary-light text-lg" />
      </div>
      <div className="relative h-1 w-full bg-secondary-light rounded-full">
        <div className="absolute h-1 w-14 bg-primary-dark rounded-full"></div>
      </div>
      {friendsList.map((friend) => {
        return (
          <Friend
            name={friend.name}
            email={friend.email}
            pictureUrl={friend.photo}
            showEmail={true}
            showButton={true}
          />
        );
      })}
    </div>
  );
};

export default Friends;