import { AvatarEdit } from '../../../components';
import { User } from '../../../models';
import { useState } from 'react';

interface Props {
  user: User;
}

function EditProfile({ user }: Props) {
  const [data, setData] = useState({
    avatar: user.avatar,
    username: user.username,
    fullname: user.fullname,
  });

  const { avatar, username, fullname } = data;

  const handleFile = (value: any) => {
    setData({
      ...data,
      avatar: value,
    });
  };

  const handleChange = ({ target }: any) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const cancel = () => {
    setData({
      ...user,
      avatar: user.avatar,
    });
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
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="text"
          className="text-center form-input "
          name="fullname"
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
