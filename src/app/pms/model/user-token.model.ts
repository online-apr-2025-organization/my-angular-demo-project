import { User } from './user.model';

export interface UserToken {
  token: string;
  user: User;
}
