import React, { useEffect, useState } from 'react';

import { AvatarEdit } from '../../../components';
import { User } from '../../../models';

const imgDedault =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const user = {
  username: 'Consuelo',
  email: 'consuelo@gmail.com',
  fullname: 'Consuelo Martinez',
  avatar: ''
};

function EditProfile({ fn }: { fn: () => void }) {
  const photoProfile = user?.avatar ? user.avatar : imgDedault;
  const [data, setData] = useState({
    avatar: photoProfile,
    username: user.username,
    fullname: user.fullname
  });

  const { avatar, username, fullname } = data

  const handleFile = (value: any) => {
    setData({
      ...data,
      avatar: value
    });
  };

  
  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  };

  const cancel = () => {
    setData({
      ...user,
      avatar: photoProfile
    });
    fn()
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center mt-4 w-full">
      <AvatarEdit fn={handleFile} image={data.avatar} />
        <form
          className="flex flex-col flex-wrap gap-5 my-5 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="text-center form-input"
            name='username'
            value={username}
            onChange={handleChange}
          />
          <input
            type="text"
            className="text-center form-input "
            name='fullname'
            value={fullname}
            onChange={handleChange}
          />
          <div className="flex flex-wrap mt-4 gap-4 w-full">
            <button
              onClick={cancel}
              className="rounded-xl w-full xs:w-44 border-primary-light text-primary-dark border-2 p-2 hover:border-white hover:bg-primary-light hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl w-full xs:w-44 bg-primary-dark text-white border-2 p-2 hover:border-primary-dark hover:bg-white hover:text-primary-dark transition-colors"
            >
              Save
            </button>
          </div>
        </form>
    </div>
  );
}

export default EditProfile;
