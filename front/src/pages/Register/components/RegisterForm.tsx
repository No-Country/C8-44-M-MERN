import { motion, AnimatePresence } from "framer-motion"
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa"
import { CiWarning } from "react-icons/ci"

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
};

type Error = {
  [key: string]: any
}

interface MessageForm {
  errors: Error
  property: string
  type: string
  text: string
}
const Message = ({ errors, property, type, text }: MessageForm) => {
  const isEqual = () => {
    return errors?
      errors[`${property}`]?.type === type
    : null
  }

  return (
    <div className='flex items-center gap-2 form-error h-5'>
      <AnimatePresence>
        { isEqual() && (
              <motion.div
                className="flex gap-1"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <CiWarning />
                <p>{ text }</p>
              </motion.div>
            )}
     </AnimatePresence>
  </div>
  ) 
}

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form gap-6 w-full">
      <div className="form-group gap-2">
        <label htmlFor="email-input" className="red-label">Email</label>
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
        <Message
          errors={errors}
          property='email'
          type={
            errors?.email?.type == 'required'? 
            'required' : 'pattern'
          }
          text={
            errors?.email?.type == 'required'?
            "This field is required"
          : "Please insert a valid email"
          }
        /> 
      </div>
      <div className="form-group gap-3">
        <label htmlFor="password-input" className="red-label">Password</label>
        <input
          type="password"
          id="password-input"
          placeholder="Your password"
          {...register("password", { required: true })}
          className="form-input outline-none text-secondary-dark"
        />
        
        <Message
          errors={errors}
          property='password'
          type='required'
          text="Password fields don't match"
        />        
      </div>
      <div className="form-group gap-2">
        <label htmlFor="password-confirm-input" className="red-label">Confirm Password</label>
        <input
          type="password"
          id="password-confirm-input"
          placeholder="Confirm Password"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === getValues("password") ? true : false,
          })}
          className="form-input outline-none text-secondary-dark"
        />

          <Message
            errors={errors}
            property='passwordConfirm'
            type={
              errors?.passwordConfirm?.type == 'required'? 
              'required' : 'validate'
            }
            text={
              errors?.passwordConfirm?.type == 'required'?
              "This field is required"
            : "Password fields don't match"
            }
          />
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <hr className='border w-full text-secondary-light'/>
          <p className='text-secondary-regular m-2'>or</p>
          <hr className='border w-full text-secondary-light'/>
        </div>
        <div className="form-group">
          <button className="flex justify-center btn btn-secondary items-center gap-2">
            <FaGoogle />
            Sign Up with Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
