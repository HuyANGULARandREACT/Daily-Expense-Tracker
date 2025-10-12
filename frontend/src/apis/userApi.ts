import axiosClient from "./axiosClient";

const USER_API_URL = "/users";
interface Update {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;
}

const userApi = {
  getAllUsers: () => axiosClient.get(`${USER_API_URL}`),
  getUserById: (id: string) => axiosClient.get(`${USER_API_URL}/${id}`),
  updateUser: (id: string, data: Update) =>
    axiosClient.put(`${USER_API_URL}/${id}`, data),
  deleteUser: (id: string) => axiosClient.delete(`${USER_API_URL}/${id}`),
};
export default userApi;
