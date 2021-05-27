// export const config.baseURL = `${window.location.origin}/npt`;
// export const config.baseURL = "http://localhost:5000/npt";


const prod = {
    baseURL: `${window.location.origin}`,
    baseLOCATION: "/npt",
  };
  
  const dev = {
    baseURL: "http://localhost:8080",
    baseLOCATION: "/npt",
  };
  
 export const config = process.env.NODE_ENV === `development` ? dev : prod;
 export const appversion = "v1.62";
