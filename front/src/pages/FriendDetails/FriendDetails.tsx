import { Header, Navbar } from "../../components";

import { useParams } from "react-router-dom";
import { Avatar, Experience, Habits } from "./compontents";
import { AiOutlinePlus } from "react-icons/ai";


const friendsList = [
  {
    id: '1',
    fullname: "César Herrera",
    email: "herrera.cesar.arg@gmail.com",
    photo: "https://i.ibb.co/rmy0SYC/pexels-photo-220453.jpg",
  },
  {
    id: '2',
    fullname: "José Carlos del Valle",
    email: "seck.dv15@gmail.com",
    photo: "https://i.ibb.co/qW0ZcR3/pexels-photo-1040880.jpg",
  },
  {
    id: '3',
    fullname: "Nathalia Riascos",
    email: "riascosnathalia6@gmail.com",
    photo: "https://i.ibb.co/D8VnNZ2/pexels-photo-3763188.jpg",
  },
];

const FriendDetails = () => {
  const { id } = useParams();
  const data = friendsList.find((friend) => friend.id === id)!;

  return (
    <>
      <div className="main-container flex flex-col gap-5">
        <Header title="Friend Details" />
        <Avatar user={data} />
        <button
          // onClick={logoutHandler}
          className='rounded-xl bg-primary-dark text-white border-2 p-2 hover:border-primary-dark hover:bg-white hover:text-primary-dark transition-colors'>
         <div className='flex items-center gap-2 justify-center'>
          <AiOutlinePlus />
          Follow
         </div>
        </button>
        <Experience />
        <Habits />
      </div>
      <Navbar />
    </>
  );
};

export default FriendDetails;
