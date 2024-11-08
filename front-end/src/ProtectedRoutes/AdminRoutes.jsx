import { Outlet } from "react-router-dom";
import { SignIn } from "../pages/auth/SignIn";

const useAuth = () =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("role");

    return isAuthenticated === 'true' && role === 'admin';
}

const AdminRoutes = () =>{
    const isAdminAuth = useAuth();
    return isAdminAuth ? <Outlet /> : <SignIn />;
}

export default AdminRoutes;