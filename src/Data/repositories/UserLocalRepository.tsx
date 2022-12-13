import { IUserLocalRepository } from "../../Domain/repositories/UserLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";
import { IUser } from "../../Domain/entities/User";

export class UserLocalRespositoryImpl implements IUserLocalRepository {
  async save(user: IUser): Promise<void> {
    const { save } = LocalStorage();
    await save("user", JSON.stringify(user));
  }

  async getUser(): Promise<IUser> {
    const { getItem } = LocalStorage();
    const data = await getItem("user");
    const user: IUser = JSON.parse(data as any);
    return user;
  }

  async remove(): Promise<void> {
    const { remove } = LocalStorage();
    await remove("user");
  }
}
