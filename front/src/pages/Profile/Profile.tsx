import { Header, Navbar } from "../../components";

const Profile = () => {
  return (
    <>
      <div className="main-container flex flex-col gap-4">
        <Header title="My Profile" editUrl={"/"} />
      </div>
      <Navbar />
    </>
  );
};

export default Profile;
