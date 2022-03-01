import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const { auth } = useSelector(state => state);

    return auth.session && auth !== {} ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute;