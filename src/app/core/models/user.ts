import { Status } from './../enums/status';
import { Rols } from '../enums/rols';

export interface User {
  username: String;
  name: String;
  role: Rols;
  email: string;
  status: Status;
  created: number;
  modified: number;
}
