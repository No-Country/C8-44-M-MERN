import { AvatarEdit, Header } from '../../components';

import { User } from '../../models';
import { useAppSelector } from '../../redux/hooks';
import { useState } from 'react';

const imgDefault =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const user: User = {
  username: 'Consuelo',
  email: 'consuelo@gmail.com',
  avatar: undefined,
};

function EditProfile() {
  const photoProfile = user.avatar ? user.avatar : imgDefault;

  const [data, setData] = useState({
    image: photoProfile,
    username: user.username,
  });
  // const { user } = useAppSelector((state) => state.user);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="main-container flex flex-col gap-5">
      <Header title="Edit Profile" />
      <AvatarEdit user={user} fn={setData} values={data} />

      <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
        <button className="rounded-xl w-full border-primary-light text-primary-dark border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-xl w-full bg-primary-dark text-white border-2 p-2 hover:border-primary-dark hover:bg-white hover:text-primary-dark transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
