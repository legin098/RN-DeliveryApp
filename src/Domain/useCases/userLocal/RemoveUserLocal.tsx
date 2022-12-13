import { UserLocalRespositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { remove } = new UserLocalRespositoryImpl();

export const RemoveUserLocalUseCase = async () => {
  return await remove();
};
