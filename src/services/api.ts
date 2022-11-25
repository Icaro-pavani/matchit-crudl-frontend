import axios from "axios";
import { SellerType } from "../store/types/sellers";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

async function getSellers() {
  return baseAPI.get<{ data: SellerType[] }>("/sellers");
}

async function deleteSeller(sellerId: number) {
  await baseAPI.delete(`/sellers/${sellerId}`);
}

const api = { getSellers, deleteSeller };
export default api;
