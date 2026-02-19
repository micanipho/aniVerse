import { useAuth } from "../providers/authProvider";
import { Navigate } from "react-router-dom";

const withAuth = (Component: React.ComponentType) => {
    const Wrapper = (props: any) => {
        const { isAuthenticated } = useAuth();
        if (!isAuthenticated) {
            return <Navigate to="/login" replace />;
        }
        return <Component {...props} />;
    };
    return Wrapper;
};

const withGuest = (Component: React.ComponentType, redirectTo: string = "/search") => {
    const Wrapper = (props: any) => {
        const { isAuthenticated } = useAuth();
        if (isAuthenticated) {
            return <Navigate to={redirectTo} replace />;
        }
        return <Component {...props} />;
    };
    return Wrapper;
};

export default withAuth;
export { withGuest };
