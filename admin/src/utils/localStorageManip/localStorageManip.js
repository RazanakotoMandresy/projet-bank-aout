export const SetToLocalStorerage = (name, value) => {
  localStorage.setItem(name, value);
};
export const GetTokenFromLocalStorage = () => {
  localStorage.getItem("token");
};
export const SetToken = (token) => {
  localStorage.setItem("token", token);
};
