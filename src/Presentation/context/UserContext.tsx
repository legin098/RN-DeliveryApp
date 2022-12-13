import { createContext, useState, useEffect } from "react";
import { IUser } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: IUser = {
  id: "",
  name: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  image: "",
  confirmPassword: "",
  session_token: "",
  roles: [],
};

export interface IUserContextProps {
  user: IUser;
  saveUserSession: (user: IUser) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as IUserContextProps);

//* children son las screen por las cuales queremos propagar la informacion
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userInitialState);

  useEffect(() => {
    getUserSession();
  }, []);

  const saveUserSession = async (user: IUser) => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  const removeUserSession = async () => {
    await RemoveUserLocalUseCase();
    setUser(userInitialState);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserSession,
        getUserSession,
        removeUserSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
