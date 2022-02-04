import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth.context";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";


const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  useEffect(() => {
    console.log(signed, 'signed'); 
  }, [signed])
  return <>{signed ? <AppRoutes /> : <AuthRoutes />}</>;
};

export default Routes;
