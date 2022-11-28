import { Friend, Header, Navbar } from '../../components';

import { useAppSelector } from '../../redux/hooks';

const friendsList = [
  {
    name: 'César Herrera',
    email: 'herrera.cesar.arg@gmail.com',
    photo: 'https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg',
  },
  {
    name: 'José Carlos del Valle',
    email: 'seck.dv15@gmail.com',
    photo: 'https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg',
  },
  {
    name: 'Nathalia Riascos',
    email: 'riascosnathalia6@gmail.com',
    photo: 'https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg',
  },
];

const AddFriends = () => {
  const { darkmode } = useAppSelector((state) => state.theme);
  return (
    <div className={`${darkmode && 'dark'}`}>
      <div className="main-container flex flex-col gap-4 dark:bg-secondary-dark">
        <Header title="Add Friend" />
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
    </div>
  );
};

export default AddFriends;
