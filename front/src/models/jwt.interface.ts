import { User } from "./user.interface";

export type Jwt = {token: string} | null;

export interface DecodeJwt {
    user: User;
    exp: number;
    iat: number;
}