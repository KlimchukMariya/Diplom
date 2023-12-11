import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/auth/useAuthContext";

export const PrivateRoute = () => {
   const auth = useAuthContext()
   const location = useLocation()

 if (auth.user === null) {
  return (
   <Navigate to="/login" state={{ from: location }} replace />
  )
 }
 return ( 
  <Outlet />
   );
}
 