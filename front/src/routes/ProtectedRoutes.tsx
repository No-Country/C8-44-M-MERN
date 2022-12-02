import { Navigate, ScrollRestoration } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}
export const ProtectedRoute = ({ children }: Props) => {
  const auth = localStorage.getItem('jwt') || null;

  return auth ? (
    <>
      <ScrollRestoration />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
