import { createAction } from "redux-actions";
import { IAuthStateContext, IAuthUser } from "./context";

export enum AuthActionEnums {
    loginPending = "LOGIN_PENDING",
    loginSuccess = "LOGIN_SUCCESS",
    loginError = "LOGIN_ERROR",

    signupPending = "SIGNUP_PENDING",
    signupSuccess = "SIGNUP_SUCCESS",
    signupError = "SIGNUP_ERROR",

    logout = "LOGOUT",
}

export const loginPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginPending,
    () => ({ isAuthenticated: false, isPending: true, isError: false, isSuccess: false })
);

export const loginSuccess = createAction<IAuthStateContext, { token: string; user: IAuthUser }>(
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

export const signupPending = createAction<IAuthStateContext>(
    AuthActionEnums.signupPending,
    () => ({ isAuthenticated: false, isPending: true, isError: false, isSuccess: false })
);

export const signupSuccess = createAction<IAuthStateContext, { user: IAuthUser }>(
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
