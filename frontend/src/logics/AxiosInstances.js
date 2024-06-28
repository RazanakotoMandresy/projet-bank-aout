import axios from "axios";
const AxiosInstances = axios.create({
  baseURL: "http://localhost:3000/",
});
export default AxiosInstances;
