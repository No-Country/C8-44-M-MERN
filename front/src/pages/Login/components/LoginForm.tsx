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
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          placeholder="Your email address"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="border border-solid"
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
          className="border border-solid"
        />
        {errors?.password?.type === "required" && (
          <p className="form-error"> This field is required</p>
        )}
      </div>
      <button type="submit" className="border border-solid mt-4">
        Sign In
      </button>
    </form>
  );
};

export default Form;
