import { Link } from 'react-router-dom'
import { RegisterForm } from './components'

const Register = () => {
  return (
    <div className='main-container flex flex-col items-center'>
      <div className='flex flex-col gap-9 w-80 sm:w-96 mx-auto mb-auto mt-0'>
        <h1 className='title'>Sign Up</h1>
        <RegisterForm />
        <p className='flex gap-2 text-secondary-regular justify-center items-center'>
          Have an Account?
          <span className='text-primary-dark text-sm'>
            <Link to='/login'>
              Sign In
            </Link>
          </span>   
        </p>
      </div>
      
    </div>
  )
}

export default Register