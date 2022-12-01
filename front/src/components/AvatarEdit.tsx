import { AiFillCamera } from 'react-icons/ai';
import { User } from '../models';

interface Props {
  user: User;
  values: { username: string; image: string };
  fn: (ele: any) => void;
}

function AvatarCard({ user, values, fn }: Props) {
  const { username, image } = values;

  const handleFile = ({ target }) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        fn({
          ...values,
          image: String(reader.result),
        });
      }
    };
    reader.readAsDataURL(target.files[0]);
  };

  const handleUserName = ({ target }) => {
    fn({
      ...values,
      username: target.value,
    });
  };

  const handleOnBlur = () => {
    if (!username) {
      fn({
        ...values,
        username: user.username,
      });
    }
  };
  return (
    <div className="flex flex-col items-center mt-4 w-full">
      <div className="mb-3 relative">
        <img
          src={image}
          alt="Profile picture"
          className="h-16 w-16 object-cover rounded-full relative"
        />
        <label htmlFor="file-input" className="custom-file-input">
          <AiFillCamera />
        </label>
        <input
          type="file"
          id="file-input"
          accept="/image/*"
          onChange={handleFile}
          className="file-input"
        />
      </div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="text-center outline-primary-dark bg-transparent dark:text-white "
          value={username}
          onChange={handleUserName}
          onBlur={handleOnBlur}
        />
        <p className="text-secondary-regular break-words">{user?.email}</p>
      </div>
    </div>
  );
}

export default AvatarCard;
