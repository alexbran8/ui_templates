// export const config.baseURL = `${window.location.origin}/nptbeta`;
// export const config.baseURL = "http://localhost:5000/nptbeta";
export const baseLOCATION = "/nptbeta";


const prod = {
    baseURL: `${window.location.origin}`,
    baseLOCATION: "/nptbeta",
  };
  
  const dev = {
    baseURL: "http://localhost:5000",
    baseLOCATION: "/nptbeta",
  };
  
 export const config = process.env.NODE_ENV === `development` ? dev : prod;
  


// update to below value when deploying on VM - port 5000 for build version and 3000 for development version
//`${window.location.origin}`

// update to 'http://localhost:5000' for development version

export const environment = "v1.62";
