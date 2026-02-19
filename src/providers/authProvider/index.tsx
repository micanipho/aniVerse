import { useReducer, useMemo, useContext } from "react";
import { INITIAL_STATE, AuthActionContext, AuthStateContext, ILoginPayload, ISignUpPayload } from "./context";
import { AuthReducer } from "./reducer";
import {
    loginPending,
    loginSuccess,
    loginError,
    signupPending,
    signupSuccess,
    signupError,
    logoutAction,
} from "./actions";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    const actions = useMemo(() => {
        const login = (payload: ILoginPayload) => {
            dispatch(loginPending());
            try {
                const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
                const matchedUser = storedUsers.find(
                    (u: any) => u.username === payload.username && u.password === payload.password
                );

                if (matchedUser) {
                    const token = `token_${Date.now()}`;
                    const { password, ...user } = matchedUser;

                    localStorage.setItem("auth_token", token);
                    dispatch(loginSuccess({ token, user }));
                } else {
                    throw new Error("Invalid username or password");
                }
            } catch (error: any) {
                const errorMessage = error?.message || "Login failed. Please try again.";
                console.error("Login error:", errorMessage);
                dispatch(loginError(errorMessage));
            }
        };

        const signup = (payload: ISignUpPayload) => {
            dispatch(signupPending());
            try {
                const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
                const userExists = storedUsers.some((u: any) => u.username === payload.username);

                if (userExists) {
                    throw new Error("Username already taken");
                }

                const newUser = { id: String(Date.now()), ...payload };
                storedUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(storedUsers));

                const token = `token_${Date.now()}`;
                const { password, ...user } = newUser;

                localStorage.setItem("auth_token", token);
                dispatch(signupSuccess({ token, user }));
            } catch (error: any) {
                const errorMessage = error?.message || "Signup failed. Please try again.";
                console.error("Signup error:", errorMessage);
                dispatch(signupError(errorMessage));
            }
        };

        const logout = () => {
            localStorage.removeItem("auth_token");
            dispatch(logoutAction());
        };

        return { login, signup, logout };
    }, []);

    return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={actions}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    );
};

export const useAuth = () => useContext(AuthStateContext);
export const useAuthActions = () => {
    const context = useContext(AuthActionContext);
    if (!context) {
        throw new Error("useAuthActions must be used within an AuthProvider");
    }
    return context;
};
