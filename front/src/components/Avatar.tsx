import { User } from '../models';

interface Props {
  user: User;
}

const lg = window.screen.width > window.screen.height;

function Avatar({ user }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-5 mt-4 w-full">
      <img
        src={user.avatar}
        alt="Profile picture"
        className={`${
          !lg ? 'h-16 w-16' : 'h-28 w-28'
        }  object-cover rounded-full relative`}
      />
      <div className="flex flex-col items-center lg:items-start mt-3">
        <h1 className="dark:text-secondary-light  lg:text-lg lg:font-semibold">
          {user.username}
        </h1>
        <p className="text-secondary-regular break-words">{user.email}</p>
      </div>
    </div>
  );
}

export default Avatar;
