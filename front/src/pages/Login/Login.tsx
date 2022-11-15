import { LoginForm } from './components'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='main-container'>
      <h1 className='title'>Sign In</h1>
      <LoginForm />
    </div>
  )
}

export default Login