import axios from "axios";
const baseDomain = "https://submit-backend.onrender.com/api/v1"; // API for products

export const baseUrl = `${baseDomain}`;

export default axios.create({
 baseUrl,
});

export const serializeQuery = (query) => {
 return Object.keys(query)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
  .join("&");
};
