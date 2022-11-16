import { Link, useLocation } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";

const Navbar = () => {
  let { pathname } = useLocation();

  return (
    <div className="fixed w-full h-18 bottom-0 flex justify-evenly items-center  border-secondary-light shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)]">
      <Link to="/profile" className="p-5">
        <BsFillPersonFill
          className={
            pathname == "/profile"
              ? "text-primary-dark w-7 h-7"
              : "text-secondary-regular w-7 h-7"
          }
        />
      </Link>
      <Link to="/home" className="p-5">
        <AiFillHome
          className={
            pathname == "/home"
              ? "text-primary-dark w-7 h-7"
              : "text-secondary-regular w-7 h-7"
          }
        />
      </Link>
      <Link to="/habits" className="p-5">
        <TiThList
          className={
            pathname == "/habits"
              ? "text-primary-dark w-7 h-7"
              : "text-secondary-regular w-7 h-7"
          }
        />
      </Link>
    </div>
  );
};

export default Navbar;
