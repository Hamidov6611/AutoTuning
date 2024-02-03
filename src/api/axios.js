import axios from "axios";

export const instance = axios.create({
  baseURL: "http://185.225.34.216:3001/api",
  //   headers: {
  //     Authorization: `Bearer ` + getTokenFromLocalStorage() || "",
  //   },
});
export const BASE_URL = `http://185.225.34.216:3001/`;
