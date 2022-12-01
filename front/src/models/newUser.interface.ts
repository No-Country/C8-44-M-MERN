import { User } from './user.interface';

export type NewUser = Omit<User, 'passwordConfirm'>;
