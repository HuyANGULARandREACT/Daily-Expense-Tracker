import axiosClient from "./axiosClient";

const userApi = {
  getAllUsers: () => axiosClient.get("/users"),
};
