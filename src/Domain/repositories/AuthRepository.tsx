import { IResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { IUser } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface IAuthRepository {
  register(user: IUser): Promise<IResponseApiDelivery>;
  login(email: string, password: string): Promise<IResponseApiDelivery>;
  registerWithImage(
    user: IUser,
    file: ImagePicker.ImagePickerAsset
  ): Promise<IResponseApiDelivery>;
}
