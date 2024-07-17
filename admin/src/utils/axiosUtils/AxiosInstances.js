import axios from "axios";
export const AxiosInstances = axios.create({
  baseURL: "http://localhost:3000/api/v1/admin",
});
