export const SetToLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};
export const RemoveFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};