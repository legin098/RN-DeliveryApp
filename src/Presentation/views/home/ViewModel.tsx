import { useContext, useState } from "react";
import { loginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { UserContext } from '../../context/UserContext';

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //const { user, getUserSession } = useUserLocal();
  const { user, saveUserSession } = useContext(UserContext)
  console.log("Usuario session: ", JSON.stringify(user, null, 2));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await loginAuthUseCase(values.email, values.password);
      console.log("Response: " + JSON.stringify(response, null, 2));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        saveUserSession(response.data)
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electronico");
      return false;
    }

    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }
    return true;
  };

  return {
    ...values,
    user,
    onChange,
    login,
    errorMessage,
  };
};

export default HomeViewModel;
