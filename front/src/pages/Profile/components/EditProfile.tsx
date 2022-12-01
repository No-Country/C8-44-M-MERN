import React, { useEffect, useState } from 'react';

import { AvatarEdit } from '../../../components';

const imgDedault =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const user = {
  username: 'Consuelo',
  email: 'consuelo@gmail.com',
  avatar: undefined,
  password: '',
};

function EditProfile() {
  const photoProfile = user.avatar ? user.avatar : imgDedault;
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    image: photoProfile,
    username: user.username,
  });

  const handleChange = (value: any) => {
    setData(value);
    setIsEditing(true);
  };

  const cancel = () => {
    setData({
      ...user,
      image: photoProfile,
    });
    setIsEditing(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    setIsEditing(false);
  };
  return (
    <div>
      <AvatarEdit user={user} fn={handleChange} values={data} />
      {isEditing ? (
        <form
          className="flex flex-wrap gap-2 my-5 justify-center"
          onSubmit={handleSubmit}
        >
          <button
            onClick={cancel}
            className="rounded-xl w-full xs:w-44 border-primary-light text-primary-dark border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-xl w-full  xs:w-44 bg-primary-dark text-white border-2 p-2 hover:border-primary-dark hover:bg-white hover:text-primary-dark transition-colors"
          >
            Save
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default EditProfile;
