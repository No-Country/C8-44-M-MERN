import { AnimatePresence, motion } from "framer-motion";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";

import { CiWarning } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

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
    <div className="flex items-center gap-2 form-error h-5">
      <AnimatePresence>
        {isEqual() && (
          <motion.div
            className="flex gap-1"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    navigate("/home");
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="form-group">
        <label htmlFor="username" className="red-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Your username"
          {...register("username", {
            required: true,
          })}
          className="form-input outline-none text-secondary-dark"
        />
        <Message
          errors={errors}
          property="username"
          type={"required"}
          text={"This field is required"}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input" className="red-label">
          Email
        </label>
        <input
          type="email"
          id="email-input"
          placeholder="Your email address"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="form-input outline-none text-secondary-dark"
        />
        {/************* Error section **************/}
        <Message
          errors={errors}
          property="email"
          type={errors?.email?.type == "required" ? "required" : "pattern"}
          text={
            errors?.email?.type == "required"
              ? "This field is required"
              : "Please insert a valid email"
          }
        />
        {/*****************************************/}
      </div>
      <div className="form-group">
        <label htmlFor="password-input" className="red-label">
          Password
        </label>
        <div>
          <input
            type={isPassword2Visible ? "text" : "password"}
            id="password-input"
            placeholder="Your password"
            {...register("password", { required: true })}
            className="form-input outline-none text-secondary-dark"
          />
          <span onClick={() => setIsPassword2Visible(!isPassword2Visible)}>
            {isPassword2Visible ? (
              <BsEye className="password-toggle-icon" />
            ) : (
              <BsEyeSlash className="password-toggle-icon" />
            )}
          </span>
        </div>
        {/************* Error section **************/}
        <Message
          errors={errors}
          property="password"
          type="required"
          text="This field is required"
        />
        {/*****************************************/}
      </div>
      <div className="form-group">
        <label htmlFor="password-confirm-input" className="red-label">
          Confirm Password
        </label>
        <div>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password-confirm-input"
            placeholder="Confirm Password"
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === getValues("password") ? true : false,
            })}
            className="form-input outline-none text-secondary-dark"
          />
          <span onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <BsEye className="password-toggle-icon" />
            ) : (
              <BsEyeSlash className="password-toggle-icon" />
            )}
          </span>
        </div>
        {/************* Error section **************/}
        <Message
          errors={errors}
          property="passwordConfirm"
          type={
            errors?.passwordConfirm?.type == "required"
              ? "required"
              : "validate"
          }
          text={
            errors?.passwordConfirm?.type == "required"
              ? "This field is required"
              : "Password fields don't match"
          }
        />
        {/*****************************************/}
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <div className="form-group">
          <button type="submit" className="btn btn-primary auth-btn">
            Sign Up
          </button>
        </div>
        {/* <div className="flex items-center justify-between">
          <hr className="w-full text-secondary-light" />
          <p className="text-secondary-regular text-sm m-2">or</p>
          <hr className="w-full text-secondary-light" />
        </div>
        <div className="form-group">
          <button className="btn btn-secondary auth-btn flex justify-center items-center gap-2">
            <FaGoogle />
            Sign Up with Google
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default Form;
