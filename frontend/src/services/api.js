import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);

export const buyStock = (data) => API.post("/trade/buy", data);
export const sellStock = (data) => API.post("/trade/sell", data);

export const getPortfolio = (userId) =>
  API.get(`/trade/portfolio/${userId}`);