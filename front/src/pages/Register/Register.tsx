import { RegisterForm } from './components'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='main-container'>
      <h1 className='title'>Sign Up</h1>
      <RegisterForm />
    </div>
  )
}

export default Register