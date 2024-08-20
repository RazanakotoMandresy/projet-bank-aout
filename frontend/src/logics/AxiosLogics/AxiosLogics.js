import AxiosInstances from "../AxiosInstances";

export const RegisterFunc = async (registerUser) => {
  return await AxiosInstances.post("/user/register", registerUser);
};
export const LoginFunc = async (logUser) => {
  return await AxiosInstances.post("/user/login", logUser);
};
export const GetUser = async (authentified) => {
  return await AxiosInstances.get("/user/logedUser", authentified);
};
export const UpdateUserProfile = async (userData, authentified) => {
  return await AxiosInstances.patch(`/user/`, userData, authentified);
};
export const PostPPfunc = async (file, AuthentifiedMultipart) => {
  return await AxiosInstances.post("/user/pp", file, AuthentifiedMultipart);
};
//
export const GetUserInfo = async (user) => {
  return await AxiosInstances.get(`/user/${user}`);
};
//
export const SendMoneyFunc = async (userToSend, value, authentified) => {
  return await AxiosInstances.post(
    `/transaction/${userToSend}`,
    value,
    authentified
  );
};
export const GetTopTrans = async (authentified) => {
  return await AxiosInstances.get(`/transaction/`, authentified);
};
export const GetSingleUser = async (uuid, authentified) => {
  return await AxiosInstances.get("/user/");
};
export const SearchRes = async (search, authentified) => {
  return await AxiosInstances.get(`/user/search?user=${search}`, authentified);
};
