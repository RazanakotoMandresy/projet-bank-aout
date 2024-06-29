import AxiosInstances from "../AxiosInstances";

// export const getUsers = () => {
//   return AxiosInstances.get("/user/");
// };

export const RegisterFunc = (registerUser) => {
  console.log("registerUser", registerUser);
  return AxiosInstances.post("/user/register", { registerUser });
};
