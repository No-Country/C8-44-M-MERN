import { AnimatePresence, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

import { CiWarning } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

type Props = {};

type FormValues = {
  email: string;
  password: string;
};

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form gap-4">
      <div className="form-group">
        <label htmlFor="email-input" className="red-label pb-2">
          Email
        </label>
        <input
          id="email-input"
          placeholder="Your email address"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="form-input text-sm text-secondary-dark"
        />
        <div className="h-5 mt-2 flex flex-col gap-1">
          <AnimatePresence>
            {errors?.email?.type === "required" && (
              <motion.div
                className="flex gap-1"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <CiWarning className="text-primary-dark text-sm" />
                <p className="form-error">This field is required</p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {errors?.email?.type === "pattern" && (
              <motion.div
                className="flex gap-1"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <CiWarning className="text-primary-dark text-sm" />
                <p className="form-error">Please insert a valid email</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password-input" className="red-label pb-2">
          Password
        </label>
        <input
          type="password"
          id="password-input"
          placeholder="Your password"
          {...register("password", { required: true })}
          className="form-input text-sm text-secondary-dark"
        />

        <div className="h-5 mt-2">
          <AnimatePresence>
            {errors?.password?.type === "required" && (
              <motion.div
                className="flex gap-1"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CiWarning className="text-primary-dark text-sm" />
                <p className="form-error">This field is required</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="form-group gap-5">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <div className="flex justify-center">
          <hr className="w-full mt-3 text-secondary-light border-t-2" />
          <p className="px-2 text-secondary-regular text-sm">or</p>
          <hr className="w-full mt-3 text-secondary-light border-t-2" />
        </div>
        <button className="btn btn-secondary flex justify-center gap-3 items-center">
          <FaGoogle className="inline-block" />
          Sign In with Google
        </button>
      </div>
    </form>
  );
};

export default Form;
