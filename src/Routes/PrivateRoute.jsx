import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen mx-auto">
        <div className="flex justify-center py-32">
        <span className="loading loading-dots text-blue-400 loading-xs"></span>
        <span className="loading loading-ring text-red-600 loading-md"></span>
        <span className="loading loading-dots text-blue-400 loading-lg"></span>
        <span className="loading loading-ring text-red-600 loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
