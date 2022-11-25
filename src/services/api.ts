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

async function updateSeller(updateInfo: {
  sellerData: SellerData;
  sellerId: number;
}) {
  return baseAPI.put(`/sellers/${updateInfo.sellerId}`, updateInfo.sellerData);
}

async function getOneSeller(sellerId: number) {
  return baseAPI.get(`/sellers/${sellerId}`);
}

const api = {
  getSellers,
  deleteSeller,
  createSeller,
  updateSeller,
  getOneSeller,
};
export default api;
