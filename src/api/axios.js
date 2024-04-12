import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.baseURL,
});
export const BASE_URL = process.env.BASE_URL
export const BASE_LINK = process.env.BASE_LINK
