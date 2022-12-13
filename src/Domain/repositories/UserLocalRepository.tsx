import { IUser } from "../entities/User";

export interface IUserLocalRepository {
  save(user: IUser): Promise<void>;
  getUser(): Promise<IUser>;
  remove(): Promise<void>;
}
