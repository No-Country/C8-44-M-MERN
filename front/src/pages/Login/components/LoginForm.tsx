import { useForm, SubmitHandler } from "react-hook-form";

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
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
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
          className="form-input"
        />
        {errors?.email?.type === "required" && (
          <p className="form-error"> This field is required</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p className="form-error"> Please insert a valid email</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          id="password-input"
          placeholder="Your password"
          {...register("password", { required: true })}
          className="form-input"
        />
        {errors?.password?.type === "required" && (
          <p className="form-error"> This field is required</p>
        )}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
      <div className="form-group">
        <button className="btn btn-secondary">
          Sign In with Google
        </button>
      </div>
    
    </form>
  );
};

export default Form;
