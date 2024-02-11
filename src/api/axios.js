import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});
export const BASE_URL = `http://localhost:3001/`;
// export const BASE_URL = `http://185.225.34.216:3001/`;
