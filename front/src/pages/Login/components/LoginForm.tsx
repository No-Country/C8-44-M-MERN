import { AnimatePresence, motion } from 'framer-motion';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { login } from '../../../redux/features/auth/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';
import { FaGoogle } from 'react-icons/fa';
import { postLogin } from '../../../utils/dataFetch';
import { setToken } from '../../../redux/features';
import { useNavigate } from 'react-router-dom';


type FormValues = {
   email: string;
   password: string;
};

type Error = {
   [key: string]: any;
};

interface MessageForm {
   errors: Error;
   property: string;
   type: string;
   text: string;
}

const Message = ({ errors, property, type, text }: MessageForm) => {
   const isEqual = () => {
      return errors ? errors[`${property}`]?.type === type : null;
   };

   return (
      <div className='flex items-center gap-2 form-error h-5'>
         <AnimatePresence>
            {isEqual() && (
               <motion.div
                  className='flex gap-1'
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}>
                  <CiWarning />
                  <p>{text}</p>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

const Form = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
    const { isLoading, isSuccess } = useAppSelector(
       (state) => state.auth
    );   
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>();
   // 'https://c8-44-m-mern-production.up.railway.app/api/user/login',
   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      await dispatch(login(data ));
         navigate('/home');

      
   };

   const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
   //
   return (
      <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>
         <div className='form-group'>
            <label htmlFor='email-input' className='red-label'>
               Email
            </label>
            <input
               id='email-input'
               placeholder='Your email address'
               {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
               })}
               className='form-input text-secondary-dark'
            />
            {/************* Error section **************/}
            <Message
               errors={errors}
               property='email'
               type={errors?.email?.type == 'required' ? 'required' : 'pattern'}
               text={
                  errors?.email?.type == 'required'
                     ? 'This field is required'
                     : 'Please insert a valid email'
               }
            />
            {/*****************************************/}
         </div>
         <div className='form-group'>
            <label htmlFor='password-input' className='red-label'>
               Password
            </label>
            <div>
               <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id='password-input'
                  placeholder='Your password'
                  {...register('password', { required: true })}
                  className='form-input text-secondary-dark'
               />
               {/************* Error section **************/}
               <Message
                  errors={errors}
                  property='password'
                  type='required'
                  text='This field is required'
               />
               {/*****************************************/}
               <span onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? (
                     <BsEye className='password-toggle-icon' />
                  ) : (
                     <BsEyeSlash className='password-toggle-icon' />
                  )}
               </span>
            </div>
         </div>
         <div className='flex flex-col w-full gap-2 mt-4'>
            <button type='submit' className='btn btn-primary auth-btn'>
               Sign In
            </button>
            {/* <div className="flex justify-center items-center">
          <hr className="w-full text-secondary-light" />
          <p className="text-secondary-regular text-sm m-2">or</p>
          <hr className="w-full text-secondary-light" />
        </div>
        <button className="btn btn-secondary auth-btn flex justify-center gap-3 items-center">
          <FaGoogle className="inline-block" />
          Sign In with Google
        </button> */}
         </div>
      </form>
   );
};

export default Form;
