import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { IUser } from "../../entities/User";
import * as ImagePicker from "expo-image-picker";

const { updateWithImage } = new UserRepositoryImpl();

export const UpdateWithImageUserUseCase = async (
  user: IUser,
  file: ImagePicker.ImagePickerAsset
) => {
  return await updateWithImage(user, file);
};
