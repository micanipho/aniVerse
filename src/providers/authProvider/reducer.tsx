import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";

export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>({
    [AuthActionEnums.loginPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AuthActionEnums.signupPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.signupSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.signupError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),

    [AuthActionEnums.logout]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE);
