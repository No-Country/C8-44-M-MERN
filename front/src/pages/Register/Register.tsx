import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Loader } from '../../components';
import { RegisterForm } from './components';
import { getUser } from '../../redux/features';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Register = () => {
  const user = useAppSelector((state) => state.user);
  const jwt = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    jwt.jwt && dispatch(getUser());
    if (jwt.isSuccess) {
      toast.success(`User successfully registered`);
    } else if (jwt.isError) {
      toast.error(`There was a problem registering the user`);
    }
  }, [jwt]);

  useEffect(() => {
    if (user.isSuccess) {
      toast.success(`Welcome ${user.user?.username}`);
      navigate('/home');
    } else if (user.isError) {
      toast.error(`'There was a problem logging in`);
    }
  }, [user]);

  return user.isLoading || jwt.isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="auth-main-container flex flex-col items-center">
        <div className="flex flex-col gap-9 2xl:w-[500px] sm:w-96 mx-auto mb-auto mt-0">
          <h1 className="title">Sign Up</h1>
          <RegisterForm />
          <p className="flex gap-2 text-secondary-regular justify-center items-center">
            Have an Account?
            <span className="text-primary-dark text-sm">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
