import axios from "axios";

const baseUrl = import.meta.env.BACKEND_HOST + "/auth";

export const login = (body) => {
  return axios.post(baseUrl, body);
};
