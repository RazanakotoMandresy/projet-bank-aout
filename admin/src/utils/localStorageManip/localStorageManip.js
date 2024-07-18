export const SetToLocalStorerage = (name, value) => {
  localStorage.setItem(name, value);
};
export const SetToken = (token) => {
  localStorage.setItem("token", token);
};
