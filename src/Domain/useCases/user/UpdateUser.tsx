import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { IUser } from "../../entities/User";

const { update } = new UserRepositoryImpl();

export const UpdateUserUseCase = async (user: IUser) => {
  return await update(user);
};
