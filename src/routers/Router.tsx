// import { useEffect, useState } from "react";
// import { useAuthStore } from "../stores/authStore";
import { BrowserRouter } from "react-router-dom"; // ✅ Thêm BrowserRouter
// import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { Spin } from "antd";

const Routers = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { token, setAuth } = useAuthStore();

//   useEffect(() => {
//     const getData = () => {
//       console.log("GetDataFromLocalStorage");
//       try {
//         const storedData = localStorage.getItem("auth-storage");
//         console.log("Stored data:", storedData);
//         if (storedData) {
//           const parsedData = JSON.parse(storedData);
//           if (parsedData.state && parsedData.state.token) {
//             setAuth(parsedData.state.user, parsedData.state.token);
//             console.log("Parsed auth data:", parsedData);
//           }
//         }
//       } catch (error) {
//         console.error("Error parsing auth data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getData();
//   }, [setAuth]);

  return (
    <BrowserRouter>
     <MainRouter />
    </BrowserRouter>
  );
};

export default Routers;
