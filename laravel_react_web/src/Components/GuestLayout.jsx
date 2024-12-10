import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "./Contexts/StateContext";


export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <Outlet/>
      </div>
    </div>
  );
}
