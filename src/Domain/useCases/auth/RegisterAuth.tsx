import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { IUser } from "../../entities/User";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: IUser) => {
  return await register(user);
};
