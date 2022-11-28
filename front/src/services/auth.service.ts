import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { DecodeJwt } from '../models/models/DecodeJwt.interface';

import { DisplayUser } from '../models/models/DisplayUser.interface';
// import { Jwt } from '../models/models/Jwt';
// import { LoginUser } from '../models/models/LoginUser.interface';

import { Jwt, User } from '../models';

// import { NewUser } from '../models/NewUser';

// const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
//   const response = await axios.post(
//     `${process.env.REACT_APP_BASE_API}/auth/register`,
//     newUser
//   );

//   return response.data;
// };

const login = async (
  user: User
): Promise<{ jwt: Jwt}> => {
  const response = await axios.post(
     `https://c8-44-m-mern-production.up.railway.app/api/user/login`,
     user
  );

  if (response.data) {
    localStorage.setItem('jwt', JSON.stringify(response.data.token));

  }
  return { jwt: response.data};
};

const logout = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};


const authService = {
  
  login,
  logout,
};

export default authService;
