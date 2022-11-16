import { Link } from "react-router-dom";
import { LoginForm } from "./components";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="main-container flex flex-col justify-between sm:px-32 md:px-36 lg:px-64 xl:px-[550px] xl:pt-24 xl:pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="title text-secondary-dark">Sign In</h1>
        <p className="text-secondary-regular text-sm">
          Hi there! Nice to see you again.
        </p>
      </div>
      <LoginForm />
      <div className="flex flex-row gap-2 justify-center align-middle">
        <p className="text-secondary-regular text-sm">Don't have an Account?</p>
        <Link className="text-primary-dark text-sm" to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
