import { createContext } from "react";
import { IAnime } from "../animeProvider/context";

export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    favorites?: IAnime[];
}

export interface ILoginPayload {
    username: string;
    password: string;
}

export interface ISignUpPayload {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export interface IAuthStateContext {
    isAuthenticated: boolean;
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
    token?: string;
    user?: IUser;
    errorMessage?: string;
}

export interface IAuthActionContext {
    login: (payload: ILoginPayload) => void;
    signup: (payload: ISignUpPayload) => void;
    logout: () => void;
}

export const INITIAL_STATE: IAuthStateContext = {
    isAuthenticated: !!localStorage.getItem("auth_token"),
    isPending: false,
    isError: false,
    isSuccess: false,
    token: localStorage.getItem("auth_token") || undefined,
};

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);

export const AuthActionContext = createContext<IAuthActionContext | null>(null);
