import { Friend, Navbar } from "../../components";

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

const AddFriends = () => {
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <h1 className="title text-secondary-dark">Add Friend</h1>
        <input
          id="search"
          placeholder="Search friends"
          className=" rounded-full border-secondary-light border-2 p-2 text-secondary-dark"
        />
        {friendsList.map((friend) => {
          return (
            <Friend
              id={friend.email}
              key={friend.email}
              name={friend.name}
              pictureUrl={friend.photo}
              email={friend.email}
              showButton={true}
            />
          );
        })}
      </div>
      <Navbar />
    </>
  );
};

export default AddFriends;
