import { AxiosInstances } from "./AxiosInstances";

export const LogAsAdmin = () => {
  return AxiosInstances.post("/logAsAdmin");
};
export const RegisterAdmin = () => {
  return AxiosInstances.post("/registerAnAdmin");
};
