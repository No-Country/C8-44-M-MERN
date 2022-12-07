import { Link, useLocation } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';
import { TiThList } from 'react-icons/ti';
import profilePicture from '../assets/profile.jpg';
import { useState } from 'react';

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
        className={`flex gap-3 lg:w-full items-center ${
          pathname == url ? 'text-primary-dark' : 'text-' + color
        }`}
      >
        {icon}
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`
        fixed left-0 bottom-0 h-18 w-full z-10
        flex items-center justify-evenly
        bg-white border-secondary-light
        shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)]
        transition-all duration-500
        lg:flex-col lg:h-full ${open ? 'lg:w-56' : 'lg:w-20'}
        lg:bg-secondary-light/50 lg:border lg-border-solid
        dark:lg:bg-gray-900 dark:lg:border-black
      `}
    >
      <Link to="/profile" className="hidden lg:block h-24">
        <div
          style={{ width: open ? '6rem' : '3rem' }}
          className={` rounded-full overflow-hidden transition-all duration-700 `}
        >
          <img
            src={profilePicture}
            alt="Profile picture"
            className="object-cover w-full"
          />
        </div>
      </Link>
      <div
        className="
          flex w-full justify-evenly
          lg:flex-col lg:w-auto
          dark:bg-gray-900
          dark:lg:bg-transparent
        "
      >
        <div className="navbar-button">
          <Icon
            url={'/profile'}
            icon={
              <>
                <BsFillPersonFill
                  className={`w-7 h-7 transition-all duration-500 ${
                    open ? 'lg:translate-x-0' : 'lg:translate-x-6'
                  }`}
                />
                <p
                  className={`text-sm transition-all duration-500 hidden lg:block ${
                    open
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  Profile
                </p>
              </>
            }
          />
        </div>
        <div className="navbar-button">
          <Icon
            url={'/home'}
            icon={
              <>
                <AiFillHome
                  className={`w-7 h-7 transition-all duration-500 ${
                    open ? 'lg:translate-x-0' : 'lg:translate-x-6'
                  }`}
                />
                <p
                  className={`text-sm transition-all duration-500 hidden lg:block ${
                    open
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  Home
                </p>
              </>
            }
          />
        </div>
        <div className="navbar-button">
          <Icon
            url={'/habits'}
            icon={
              <>
                <TiThList
                  className={`w-7 h-7 transition-all duration-500 ${
                    open ? 'lg:translate-x-0' : 'lg:translate-x-6'
                  }`}
                />
                <p
                  className={`text-sm transition-all duration-500 hidden lg:block ${
                    open
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  Habits
                </p>
              </>
            }
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="navbar-button">
          <div
            className={`flex items-center gap-3 text-secondary-regular cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <>
              <IoChevronBack
                className={`
                  w-7 h-7 transition-all duration-500 rotate-180
                  ${open ? 'translate-x-0 flip' : 'translate-x-6 '}
                `}
              />
              <p
                className={`text-sm transition-all  duration-500  hidden lg:block ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
              >
                Menu
              </p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
