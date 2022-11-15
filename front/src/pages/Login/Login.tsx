import { LoginForm } from './components'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <h1 className='title'>Sign In</h1>
      <LoginForm />
    </div>
  )
}

export default Login