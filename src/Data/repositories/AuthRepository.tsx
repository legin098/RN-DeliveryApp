import { AxiosError } from "axios";
import { IUser } from "../../Domain/entities/User";
import { IAuthRepository } from "../../Domain/repositories/AuthRepository";
import {
  ApiDelivery,
  ApiDeliveryForImage,
} from "../sources/remote/api/ApiDelivery";
import { IResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import mime from "mime";
import * as ImagePicker from "expo-image-picker";

export class AuthRepositoryImpl implements IAuthRepository {
  async register(user: IUser): Promise<IResponseApiDelivery> {
    try {
      const { data } = await ApiDelivery.post<IResponseApiDelivery>(
        "/users/create",
        user
      );
      return Promise.resolve(data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error:" + JSON.stringify(e.response?.data, null, 2));
      const apiError: IResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async registerWithImage(
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

      const response = await ApiDeliveryForImage.post<IResponseApiDelivery>(
        "/users/createWhitImage",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error:" + JSON.stringify(e.response?.data, null, 2));
      const apiError: IResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async login(email: string, password: string): Promise<IResponseApiDelivery> {
    try {
      const { data } = await ApiDelivery.post<IResponseApiDelivery>(
        "/users/login",
        { email, password }
      );
      return Promise.resolve(data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error:" + JSON.stringify(e.response?.data, null, 2));
      const apiError: IResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
