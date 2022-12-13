import { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";
import * as ImagePicker from "expo-image-picker";
import { useUserLocal } from "../../hooks/useUserLocal";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { RegisterWithImageAuthUseCase } from "../../../Domain/useCases/auth/RegisterWithImageAuth";

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { user, getUserSession } = useUserLocal();

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

  const register = async () => {
    if (isValidForm()) {
      setLoading(true);
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);
      setLoading(false);
      console.log("Result: " + JSON.stringify(response, null, 2));
      if (response.success) {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
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
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electronico");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresa tu telefono");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }
    if (values.name === "") {
      setErrorMessage("Confirma tu contraseña");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return false;
    }
    if (values.image === "") {
      setErrorMessage("Selecciona una imagen");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    errorMessage,
    user,
    loading,
  };
};

export default RegisterViewModel;
