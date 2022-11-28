import { DataUser } from './DisplayUser.interface';

export interface DecodeJwt {
    user: DataUser;
    exp: number;
    iat: number;
}