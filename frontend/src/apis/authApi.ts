import axiosClient from "./axiosClient";

const USER_API_URL = "/auth";

interface Register {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;
}
interface Login {
  email: string;
  password: string;
}
interface ChangePassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}
const authApi = {
  registerUser: (data: Register) =>
    axiosClient.post(`${USER_API_URL}/register`, data),
  loginUser: (data: Login) => axiosClient.post(`${USER_API_URL}/login`, data),
  changePassword: (data: ChangePassword) =>
    axiosClient.patch(`${USER_API_URL}/changePassword`, data),
};
export default authApi;
