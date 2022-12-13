import { IUser } from "../../Domain/entities/User";
import { IUserRepository } from "../../Domain/repositories/UserRepository";
import { IResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import {
  ApiDelivery,
  ApiDeliveryForImage,
} from "../sources/remote/api/ApiDelivery";
import mime from "mime";
import * as ImagePicker from 'expo-image-picker';

export class UserRepositoryImpl implements IUserRepository {
  async update(user: IUser): Promise<IResponseApiDelivery> {
    try {
      const { data } = await ApiDelivery.put<IResponseApiDelivery>(
        "/users/updateWithoutImage",
        user
      );
      return Promise.resolve(data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error update:" + JSON.stringify(e.response?.data, null, 2));
      const apiError: IResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  async updateWithImage(
    user: IUser,
    file: ImagePicker.ImagePickerAsset
  ): Promise<IResponseApiDelivery> {
    try {
      let data = new FormData();
      data.append("image", {
        uri: file.uri,
        // @ts-ignore
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });
      data.append("user", JSON.stringify(user));

      const response = await ApiDeliveryForImage.put<IResponseApiDelivery>(
        "/users/update",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error updateWithImage:" + JSON.stringify(e.response?.data, null, 2));
      const apiError: IResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
