import axios from "axios";
import {
  getLocalStorageValue,
  deleteLocalStorageValue,
} from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:8002/users",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
  },
});

export const getAllUsers = async (options = {}) => {
  try {
    const response = await api.get("/all", options);
    return response.data;
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.post("/delete", { id });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
