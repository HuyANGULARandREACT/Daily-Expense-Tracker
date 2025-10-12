import axiosClient from "./axiosClient";

const USER_API_URL = "/user";

const userApi = {
  getAllUsers: () => axiosClient.get(`${USER_API_URL}s`),
  getUserById: ()
};
