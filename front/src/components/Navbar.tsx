import { Link, useLocation } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { TiThList } from 'react-icons/ti';
import profilePicture from '../assets/profile.jpg';

interface Icon {
  icon: any;
  url: string;
  color?: string;
}

const Icon = ({ icon, url, color = 'secondary-regular' }: Icon) => {
  let { pathname } = useLocation();
  return (
    <Link to={url} className="p-5">
      <div
        className={`w-7 h-7 ${
          pathname == url ? 'text-primary-dark' : 'text-' + color
        }`}
      >
        {icon}
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div
      className="fixed bg-white z-10 w-full h-18 bottom-0 flex justify-evenly items-center  
    lg:w-56 lg:flex-col lg:h-full lg:justify-center lg:gap-3
    border-secondary-light shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)] lg:bg-secondary-light/50 lg:shadow-none lg:border lg-border-solid"
    >
      <Link to="/profile" className="hidden lg:flex ">
        <div className="h-0 w-0 lg:h-20 lg:w-20 rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Profile picture"
            className="object-cover h-full "
          />
        </div>
      </Link>
      <div className="navbar-button">
        <Icon
          url={'/profile'}
          icon={<BsFillPersonFill className="w-full h-full" />}
        />
        Profile
      </div>
      <div className="navbar-button">
        <Icon url={'/home'} icon={<AiFillHome className="w-full h-full" />} />
        Home
      </div>
      <div className="navbar-button">
        <Icon url={'/habits'} icon={<TiThList className="w-full h-full" />} />
        Habits
      </div>
    </div>
  );
};

export default Navbar;
