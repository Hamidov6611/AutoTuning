import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  //   headers: {
  //     Authorization: `Bearer ` + getTokenFromLocalStorage() || "",
  //   },
});
export const BASE_URL = `http://localhost:3001/`;
