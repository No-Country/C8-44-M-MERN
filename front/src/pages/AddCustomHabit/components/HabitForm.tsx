import { AnimatePresence, motion } from 'framer-motion';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FcReadingEbook, FcSportsMode } from 'react-icons/fc';
import { GiHealthNormal, GiOpenBook } from 'react-icons/gi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createCustomHabit, createHabit } from '../../../redux/features';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect, useState } from 'react';

import { CiWarning } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  name: string;
  description: string;
  category: string;
  frecuency: number;
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await dispatch(createCustomHabit(data));
    toast.success('Successfully created habit');
    navigate('/habits');
  };

  /* const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); */

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="form-group lg:flex-row lg:gap-12">
        <div className="form-group">
          <label htmlFor="name-input" className="red-label">
            Name
          </label>
          <input
            id="name-input"
            placeholder="Enter a habit name"
            {...register('name', {
              required: true,
            })}
            className="form-input text-secondary-dark dark:bg-secondary-dark dark:text-secondary-light"
          />
          {/************* Error section **************/}
          <Message
            errors={errors}
            property="name"
            type={errors?.name?.type == 'required' ? 'required' : 'pattern'}
            text={
              errors?.name?.type == 'required'
                ? 'This field is required'
                : 'Please insert a valid email'
            }
          />
          {/*****************************************/}
        </div>
        <div className="form-group">
          <label htmlFor="description-input" className="red-label">
            Description
          </label>
          <input
            id="description-input"
            placeholder="Enter a habit description"
            {...register('description', {
              required: true,
            })}
            className="form-input text-secondary-dark dark:bg-secondary-dark dark:text-secondary-light"
          />
          {/************* Error section **************/}
          <Message
            errors={errors}
            property="description"
            type={
              errors?.description?.type == 'required' ? 'required' : 'pattern'
            }
            text={
              errors?.description?.type == 'required'
                ? 'This field is required'
                : 'Please insert a valid email'
            }
          />
          {/*****************************************/}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category-input" className="red-label">
          Category
        </label>
        <div className="relative h-1 w-full my-1 bg-secondary-light rounded-full dark:bg-secondary-regular"></div>
        <p className="text-secondary-regular text-sm">Choose a category</p>
        {/************* Error section **************/}
        <Message
          errors={errors}
          property="category"
          type={errors?.category?.type == 'required' ? 'required' : 'pattern'}
          text={
            errors?.category?.type == 'required'
              ? 'This field is required'
              : 'Please insert a valid email'
          }
        />
        {/*****************************************/}
        <div className="flex w-full justify-around mt-6 lg:justify-start lg:gap-12">
          <div className="flex flex-col justify-center items-center gap-2">
            <GiHealthNormal className="bg-secondary-light border-2 rounded-full p-5 w-20 h-20 text-secondary-dark opacity-70" />
            <div className="flex gap-2 items-center">
              <span className="text-secondary-regular text-sm">Health</span>
              <input
                type={'radio'}
                id="health-input"
                value={'health'}
                {...register('category', {
                  required: true,
                })}
                className="form-input text-secondary-dark"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiOpenBook className="bg-secondary-light border-2 rounded-full p-4 w-20 h-20 text-secondary-dark opacity-70" />
            <div className="flex gap-2 items-center">
              <span className="text-secondary-regular text-sm">Education</span>
              <input
                value={'education'}
                type={'radio'}
                id="education-input"
                {...register('category', {
                  required: true,
                })}
                className="form-input text-secondary-dark"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-6">
        <label htmlFor="frecuency-input" className="red-label">
          Frecuency
        </label>
        <div className="relative h-1 w-full my-1 bg-secondary-light rounded-full dark:bg-secondary-regular"></div>
        <div className="flex gap-3 mb-2">
          <span className="text-secondary-regular">Repeat every</span>
          <input
            disabled
            value={1}
            id="frecuency-input"
            {...register('frecuency', {
              /* required: true, */
              pattern: /^(?:[1-9]\d?|[12]\d{2}|3[0-5]\d|36[0-5])$/,
            })}
            className="border-b-2 text-center border-secondary-light w-7 text-secondary-dark
            dark:text-secondary-light  dark:bg-secondary-dark
            "
          />
          <span className="text-secondary-regular">days</span>
        </div>

        {/************* Error section **************/}
        <Message
          errors={errors}
          property="frecuency"
          type={errors?.frecuency?.type == 'required' ? 'required' : 'pattern'}
          text={
            errors?.frecuency?.type == 'required'
              ? 'This field is required'
              : 'Frequency must be a number between 1 and 365'
          }
        />
        {/*****************************************/}
      </div>
      <div className="flex flex-col w-full gap-2 mt-4 lg:items-end">
        <button type="submit" className="btn btn-primary auth-btn lg:w-56">
          Add Habit
        </button>
      </div>
    </form>
  );
};

export default Form;
