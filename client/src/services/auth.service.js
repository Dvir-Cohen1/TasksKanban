import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8002/auth",
  headers: { "Content-Type": "application/json" },
});

async function login(email, password) {
  try {
    const response = await api.post("/login", { email, password });
    return response;
  } catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
}

const authService = { login };
export default authService;
