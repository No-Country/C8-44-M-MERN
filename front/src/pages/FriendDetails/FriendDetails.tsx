import { Navbar } from "../../components";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div className="main-container flex flex-col gap-4">{id}</div>
      <Navbar />
    </>
  );
};

export default FriendDetails;
