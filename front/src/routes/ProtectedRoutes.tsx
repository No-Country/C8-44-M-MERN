import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element | JSX.Element[]
}
export const ProtectedRoute = ({ children }: Props) => {
  const auth = localStorage.getItem('jwt')
  return  auth
    ? children
    : <Navigate to='/' />
}