import { UserLocalRespositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { IUser } from "../../entities/User";

const { save } = new UserLocalRespositoryImpl();

export const SaveUserLocalUseCase = async (user: IUser) => {
  return await save(user);
};
