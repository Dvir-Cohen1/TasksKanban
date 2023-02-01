import axios from "axios";
import {
  getLocalStorageValue,
  deleteLocalStorageValue,
} from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:8002/auth",
  headers: { "Content-Type": "application/json" },
});

async function login(email, password) {
  try {
    const response = await api.post("/login", { email, password });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

const logout = async () => {
  try {
    const token = getLocalStorageValue("ac_token");
    if (!token) return;
    const { data } = await api.delete("/logout", { data: { token } });
    if (!data.error) {
      deleteLocalStorageValue("ac_token");
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
const authService = { login, logout };
export default authService;
