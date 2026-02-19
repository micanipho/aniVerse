import { createAction } from "redux-actions";
import { IAuthStateContext, IUser } from "./context";

export enum AuthActionEnums {
    loginPending = "LOGIN_PENDING",
    loginSuccess = "LOGIN_SUCCESS",
    loginError = "LOGIN_ERROR",

    signupPending = "SIGNUP_PENDING",
    signupSuccess = "SIGNUP_SUCCESS",
    signupError = "SIGNUP_ERROR",

    logout = "LOGOUT",
}

// Login actions
export const loginPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginPending,
    () => ({ isAuthenticated: false, isPending: true, isError: false, isSuccess: false })
);

export const loginSuccess = createAction<IAuthStateContext, { token: string; user: IUser }>(
    AuthActionEnums.loginSuccess,
    ({ token, user }) => ({
        isAuthenticated: true,
        isPending: false,
        isError: false,
        isSuccess: true,
        token,
        user,
        errorMessage: undefined,
    })
);

export const loginError = createAction<IAuthStateContext, string>(
    AuthActionEnums.loginError,
    (errorMessage) => ({
        isAuthenticated: false,
        isPending: false,
        isError: true,
        isSuccess: false,
        errorMessage,
    })
);

// Signup actions
export const signupPending = createAction<IAuthStateContext>(
    AuthActionEnums.signupPending,
    () => ({ isAuthenticated: false, isPending: true, isError: false, isSuccess: false })
);

export const signupSuccess = createAction<IAuthStateContext, { user: IUser }>(
    AuthActionEnums.signupSuccess,
    ({ user }) => ({
        isAuthenticated: false,
        isPending: false,
        isError: false,
        isSuccess: true,
        user,
        errorMessage: undefined,
    })
);

export const signupError = createAction<IAuthStateContext, string>(
    AuthActionEnums.signupError,
    (errorMessage) => ({
        isAuthenticated: false,
        isPending: false,
        isError: true,
        isSuccess: false,
        errorMessage,
    })
);

// Logout action
export const logoutAction = createAction<IAuthStateContext>(
    AuthActionEnums.logout,
    () => ({
        isAuthenticated: false,
        isPending: false,
        isError: false,
        isSuccess: false,
        token: undefined,
        user: undefined,
        errorMessage: undefined,
    })
);
