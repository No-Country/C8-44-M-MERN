import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Loader } from '../../components';
import { LoginForm } from './components';
import { getUser } from '../../redux/features';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {
  const user = useAppSelector((state) => state.user);
  const jwt = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    jwt.jwt && dispatch(getUser());
  }, [jwt]);

  useEffect(() => {
    if (user.isSuccess) {
      toast.success(`Welcome back ${user.user?.username}`);
      navigate('/home');
    } else if (user.isError) {
      toast.error(`'There was a problem logging in`);
    }
  }, [user]);

  return user.isLoading || jwt.isLoading ? (
    <Loader />
  ) : (
    <div className="main-container flex flex-col items-center">
      <div className="flex flex-col gap-9 w-80 sm:w-96 2xl:w-[500px] mx-auto mb-auto mt-0">
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
