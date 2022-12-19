import { Navigate, Outlet } from "react-router-dom";
const AnonymousLayout = ({ admin }) => {
  const isAdmin = () => {
    if (admin || admin !== null) return;
  };
  //   return <> {admin ? (<Navigate to="/" replace />) : <Outlet />}</>;
  return <>{admin ? <Navigate to="/" replace /> : <Outlet />}</>;
};
export default AnonymousLayout;
