import { useMutation } from "@tanstack/react-query";
import authApi from "../../apis/authApi";

export const useAuth = () => {
  const registerUser = useMutation({
    mutationFn: authApi.registerUser,
  });

  const loginUser = useMutation({
    mutationFn: authApi.loginUser,
  });

  const changePassword = useMutation({
    mutationFn: authApi.changePassword,
  });

  return { registerUser, loginUser, changePassword };
};
