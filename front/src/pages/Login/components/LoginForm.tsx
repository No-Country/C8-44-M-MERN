import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { CiWarning } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

//______________________GOOGLE LOGIN
const clientId="69744926663-svfn240ol3t1t1nkrg2i83kjr23pc6kt.apps.googleusercontent.com";


const onSuccess=(res)=>{
  console.log("LOGIN SUCESS! Current user:",res.profileObj)
}
const onFailure=(res)=>{
  console.log("LOGIN FAILED! res:",res)
}

useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  }
  gapi.load('client:auth2',start)
})
//______________________GOOGLE LOGIN

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
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="form-group">
        <label htmlFor="email-input" className="red-label">
          Email
        </label>
        <input
          id="email-input"
          placeholder="Your email address"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="form-input text-secondary-dark"
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
        <input
          type="password"
          id="password-input"
          placeholder="Your password"
          {...register("password", { required: true })}
          className="form-input text-secondary-dark"
        />
        {/************* Error section **************/}
        <Message
          errors={errors}
          property="password"
          type="required"
          text="This field is required"
        />
        {/*****************************************/}
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <button type="submit" className="btn btn-primary auth-btn">
          Sign In
        </button>
        <div className="flex justify-center items-center">
          <hr className="w-full text-secondary-light" />
          <p className="text-secondary-regular text-sm m-2">or</p>
          <hr className="w-full text-secondary-light" />
        </div>
        {/* //______________________GOOGLE LOGIN */}
        <div id="dignInButton">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sing In with google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            coockiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
        {/* //______________________GOOGLE LOGIN */}
      </div>
    </form>
  );
};

export default Form;
