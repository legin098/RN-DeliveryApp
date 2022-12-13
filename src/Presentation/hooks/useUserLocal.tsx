import { useEffect, useState } from "react";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { IUser } from "../../Domain/entities/User";

export const useUserLocal = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  return {
    user,
    getUserSession
  };
};
