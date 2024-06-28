import AxiosInstances from "../AxiosInstances";

export const getUsers = () => {
  return AxiosInstances.get("/user/");
};
