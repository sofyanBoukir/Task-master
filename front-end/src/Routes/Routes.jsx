import { Navigate, Outlet } from "react-router-dom";

const useAuth = () =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated === 'true';
}

export const ProtectedRoutes = () => {
    const isUserAuth = useAuth();
    return (
        isUserAuth ? <Outlet /> : <Navigate to={"/"} />
    )
}