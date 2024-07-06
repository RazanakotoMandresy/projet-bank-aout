export const Authentified = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
