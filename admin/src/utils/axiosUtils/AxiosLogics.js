import { AxiosInstances } from "./AxiosInstances";
export const LogAsAdmin = (value) => {
  return AxiosInstances.post("/loginAsAdmin", value);
};
export const RegisterAdmin = (value) => {
  return AxiosInstances.post("/registerAnAdmin", value);
};
export const GetBanksList = async (Auth) => {
  return await AxiosInstances.get("/getBank", Auth);
};
export const CreateBankAxios = async (value, Auth) => {
  return await AxiosInstances.post("/createBank", value, Auth);
};
export const GetAdminInfo = async (Auth) => {
  return await AxiosInstances.get("/getAdminInfo", Auth);
};
