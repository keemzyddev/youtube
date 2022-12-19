import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthLayout = ({ admin }) => {
  const location = useLocation();
  const isAdmin = () => {
    if (admin || admin !== null) return;
  };
  return (
    <>
      {admin ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};
export default AuthLayout;
