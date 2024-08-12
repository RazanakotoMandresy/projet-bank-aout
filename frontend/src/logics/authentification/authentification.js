export const Authentified = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const AuthentifiedMultipart = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
  