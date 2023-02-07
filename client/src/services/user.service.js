import axios from "axios";
import {
  getLocalStorageValue,
  deleteLocalStorageValue,
} from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:8002/users",
  headers: { "Content-Type": "application/json" },
});

export const getAllUsers = async (options = {}) => {
  try {
    const response = await api.get("/all", options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
