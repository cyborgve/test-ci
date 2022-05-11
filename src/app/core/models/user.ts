import { Status } from '@core/enums/status';
import { Role } from '@core/enums/role';
export interface User {
  username: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  created: number;
  modified: number;
}
