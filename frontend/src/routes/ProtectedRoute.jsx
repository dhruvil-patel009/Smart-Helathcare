import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);

  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  console.log("Token:", token);
  console.log("Role:", role);
  console.log("Allowed roles:", allowedRoles);
  return accessibleRoute;
};

export default ProtectedRoute;
