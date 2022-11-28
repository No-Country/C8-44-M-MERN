import { DisplayUser } from "./DisplayUser.interface";

export interface DecodeJwt {
    user: DisplayUser;
    exp: number;
    iat: number;
}