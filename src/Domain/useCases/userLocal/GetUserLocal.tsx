import { UserLocalRespositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { getUser } = new UserLocalRespositoryImpl();

export const GetUserLocalUseCase = async () => {
  return await getUser();
};
