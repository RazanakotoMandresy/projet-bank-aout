// import { AuhType } from "../auth/Auth";
// import { AxiosRequestConfig } from "axios";
import AxiosInstances from "./AxiosInstances";
const auth = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const GetUser = async () => {
  return await AxiosInstances.get("/user/logedUser", auth);
};
export const SendMoneyFunc = async (userToSend: string, value: number) => {
  return await AxiosInstances.post(`/transaction/${userToSend}`, value, auth);
};
export const GetUserInfo = async (user: string) => {
  return await AxiosInstances.get(`/user/${user}`);
};
export const GetTopTrans = async () => {
  return await AxiosInstances.get(`/transaction/`, auth);
};
