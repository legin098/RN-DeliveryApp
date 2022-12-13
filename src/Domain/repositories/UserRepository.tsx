import { IResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { IUser } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface IUserRepository {
  update(user: IUser): Promise<IResponseApiDelivery>;
  updateWithImage(
    user: IUser,
    file: ImagePicker.ImagePickerAsset
  ): Promise<IResponseApiDelivery>;
}
