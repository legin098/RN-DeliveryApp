import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const ProfileInfoViewModel = () => {
  const { user, removeUserSession } = useContext(UserContext);

  return {
    user,
    removeUserSession,
  };
};

export default ProfileInfoViewModel;
