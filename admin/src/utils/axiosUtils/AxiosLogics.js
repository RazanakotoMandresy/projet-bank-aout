import { AxiosInstances } from "./AxiosInstances";
export const LogAsAdmin = (value) => {
  return AxiosInstances.post("/loginAsAdmin", value);
};
export const RegisterAdmin = (value) => {
  return AxiosInstances.post("/registerAnAdmin", value);
};
