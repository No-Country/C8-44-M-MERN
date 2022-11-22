import { Header, Navbar } from "../../components";

import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header title="Friend Details" />
        <h4>{id}</h4>
      </div>
      <Navbar />
    </>
  );
};

export default FriendDetails;
