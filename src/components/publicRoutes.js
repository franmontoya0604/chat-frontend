import { Navigate, Outlet } from "react-router-dom";
import useInitialState from "../hooks/useInitialState";
import Spinner from "./Spinner";

const ProtectedRoutes = ({ children }) => {
  const auth = sessionStorage.getItem("auth");
  const { loading } = useInitialState();

  if (loading) return <Spinner />;

  return auth ? <Navigate to="/login" /> : <>{children}</>;
};

export default ProtectedRoutes;
