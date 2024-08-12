export const url = "http://localhost:3000"
export  const GetDate = () => {
    const ajd = new Date();
    const month = ajd.getMonth() + 1;
    const year = ajd.getFullYear();
    const date = ajd.getDate();
    return `${month}/${date}/${year}`;
  };