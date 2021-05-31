const prod = {
    baseURL: `${window.location.origin}`,
    baseLOCATION: "/nptbeta",
  };
  
  const dev = {
    baseURL: "http://localhost:8080",
    baseLOCATION: "",
  };
  
 export const config = process.env.NODE_ENV === `development` ? dev : prod;
 export const appversion = "v1.62";
