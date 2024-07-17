import { AxiosInstances } from "./AxiosInstances";
export const LogAsAdmin = (value) => {
  return AxiosInstances.post("/logAsAdmin", value);
};
export const RegisterAdmin = (value) => {
  return AxiosInstances.post("/registerAnAdmin", value);
};
