import { Role } from './role.model';

export interface User {
  userId: number;
  userName: string;
  userPassword: string;
  allRoles: Role[];
}
