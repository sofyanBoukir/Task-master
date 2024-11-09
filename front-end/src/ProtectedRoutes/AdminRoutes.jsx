import { Navigate, Outlet } from "react-router-dom";

const useAuth = () =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("role");

    return isAuthenticated === 'true' && role === 'admin';
}

const AdminRoutes = () =>{
    const isAdminAuth = useAuth();
    return isAdminAuth ? <Outlet /> : <Navigate to={"/"} />;
}

export default AdminRoutes;