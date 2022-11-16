import { Link } from "react-router-dom";
import { LoginForm } from "./components";

const Login = () => {
  return (
    <div className="main-container flex flex-col items-center">
      <div className="flex flex-col gap-9 w-80 sm:w-96 mx-auto mb-auto mt-0">
        <div>
          <h1 className="title">Sign In</h1>
          <p className="text-secondary-regular text-sm pt-2">
            Hi there! Nice to see you again.
          </p>
        </div>
        <LoginForm />
        <p className="flex gap-2 text-secondary-regular justify-center items-center">
          Don't have an Account?
          <span className="text-primary-dark text-sm">
            <Link to="/register"> Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
