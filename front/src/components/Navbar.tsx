import { Link, useLocation } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";

interface Icon {
  icon: any;
  url: string;
  color?: string;
}

const Icon = ({ icon, url, color = "secondary-regular" }: Icon) => {
  let { pathname } = useLocation();
  return (
    <Link to={url} className="p-5">
      <div
        className={`w-7 h-7 ${
          pathname == url ? "text-primary-dark" : "text-" + color
        }`}
      >
        {icon}
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="fixed bg-white z-10 w-full h-18 bottom-0 flex justify-evenly items-center  border-secondary-light shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)]">
      <Icon
        url={"/profile"}
        icon={<BsFillPersonFill className="w-full h-full" />}
      />
      <Icon url={"/home"} icon={<AiFillHome className="w-full h-full" />} />
      <Icon url={"/habits"} icon={<TiThList className="w-full h-full" />} />
    </div>
  );
};

export default Navbar;
