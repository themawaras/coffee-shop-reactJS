import axios from "axios";

const baseUrl = import.meta.env.BACKEND_HOST + "/auth/register";

export const registerUser = (body) => {
  return axios.post(baseUrl, body);
};
