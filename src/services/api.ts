import axios from "axios";
import { SellerType } from "../store/types/sellers";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

async function getSellers() {
  return baseAPI.get<{ data: SellerType[] }>("/sellers");
}

const api = { getSellers };
export default api;
