import { LazyLoadImage } from 'react-lazy-load-image-component';
import { User } from '../models';

interface Props {
  user: User;
}

const lg = window.screen.width > window.screen.height;

function Avatar({ user }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-5 mt-4 w-full">
      <div className={`${!lg ? 'h-16 w-16' : 'h-28 w-28'}`}>
        <LazyLoadImage
          src={user.avatar}
          alt="Profile picture"
          className={`border-2 object-cover rounded-full relative`}
          effect="blur"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start mt-3 lg:mt-0">
        <h2 className="dark:text-secondary-light  lg:text-lg lg:font-semibold text-secondary-dark">
          @{user.username}
        </h2>
        <h1 className="dark:text-secondary-light  lg:text-2xl lg:font-bold">
          {user.fullname}
        </h1>
        <p className="text-secondary-regular break-words">{user.email}</p>
      </div>
    </div>
  );
}

export default Avatar;
