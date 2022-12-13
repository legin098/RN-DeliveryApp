import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { IUser } from "../../../../Domain/entities/User";

export const ApiDelivery = axios.create({
  baseURL: "http://192.168.101.6:3000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const ApiDeliveryForImage = axios.create({
  baseURL: "http://192.168.101.6:3000/api",
  headers: {
    "Content-type": "multipart/form-data",
    "accept": "application/json",
  },
});

//Interceptors
ApiDelivery.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: IUser = JSON.parse(data);
    config.headers!["Authorization"] = user.session_token!;
  }
  return config;
});

ApiDeliveryForImage.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: IUser = JSON.parse(data);
    config.headers!["Authorization"] = user.session_token!;
  }
  return config;
});
