import axios from "axios";
import {
  getLocalStorageValue,
  deleteLocalStorageValue,
} from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:8002/auth",
  headers: { "Content-Type": "application/json" },
});

async function register(
  email,
  password,
  passwordConfirmation,
  lastName,
  firstName
) {
  try {
    const response = await api.post("/register", {
      email,
      password,
      passwordConfirmation,
      lastName,
      firstName,
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

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

const isLogin = async () => {
  try {
    const token = getLocalStorageValue("ac_token");
    if (!token) return Promise.reject();
    const response = await api.post("/isLogin", {
      ac_token: token,
    });
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};

const authService = { login, logout, isLogin, register };
export default authService;
