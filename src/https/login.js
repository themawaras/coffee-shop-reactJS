import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/auth";

export const login = (body) => {
  return axios.post(baseUrl, body);
};
