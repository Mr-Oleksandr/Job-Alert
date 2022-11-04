import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
};

export const baseURL = "https://api.json-generator.com/templates/";

const API = axios.create({
  baseURL,
  headers,
});

export default API;
