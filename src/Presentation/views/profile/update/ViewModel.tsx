import { useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import { UpdateWithImageUserUseCase } from "../../../../Domain/useCases/user/UpdateWithImageUser";
import { UpdateUserUseCase } from "../../../../Domain/useCases/user/UpdateUser";
import { IUser } from "../../../../Domain/entities/User";
import { IResponseApiDelivery } from "../../../../Data/sources/remote/models/ResponseApiDelivery";
import { UserContext } from "../../../context/UserContext";

const ProfileUpdateViewModel = (user: IUser) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [values, setValues] = useState(user);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { saveUserSession } = useContext(UserContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const update = async () => {
    if (isValidForm()) {
      setLoading(true);

      let response = {} as IResponseApiDelivery;
      if (values.image?.includes("http://")) {
        response = await UpdateWithImageUserUseCase(values, file!);
      } else {
        response = await UpdateUserUseCase(values);
      }

      setLoading(false);
      console.log("Result: " + JSON.stringify(response, null, 2));
      if (response.success) {
        saveUserSession(response.data);
        setSuccessMessage(response.message);
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresa tu nombre");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessage("Ingresa tu apellido");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresa tu telefono");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    update,
    pickImage,
    takePhoto,
    errorMessage,
    successMessage,
    user,
    loading,
  };
};

export default ProfileUpdateViewModel;
