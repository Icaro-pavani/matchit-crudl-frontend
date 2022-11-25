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

export interface SellerData {
  name: string;
  cnpj: string;
  address: string;
}

async function createSeller(sellerData: SellerData) {
  return baseAPI.post("/sellers", sellerData);
}

const api = { getSellers, deleteSeller, createSeller };
export default api;
