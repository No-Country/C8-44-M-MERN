export interface User {
  _id?: string;
  username?: string;
  fullname?: string;
  email: string;
  password: string;
  avatar?: string;
  rol?: string;
  birdthday?: string;
  followers?: [];
  habits?: [];
}
