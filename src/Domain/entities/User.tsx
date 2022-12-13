import { IRol } from "./Rol";

export interface IUser {
  id?:             string;
  name:            string;
  lastname:        string;
  phone:           string;
  email:           string;
  password:        string;
  image?:          string
  confirmPassword: string;
  session_token?:  string;
  roles?:          IRol[]
}