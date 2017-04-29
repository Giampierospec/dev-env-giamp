//Exporting a function that gives me the BaseUrl
export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === "localhost";
  return inDevelopment ? "http://localhost:3001/":"/";
}
