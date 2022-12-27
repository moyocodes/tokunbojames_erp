// @ts-nocheck
import { LOGIN_USER } from "types/auth/AuthTypes";
import { LOADING_STARTS, LOADING_STOPS } from "types/LoadingTypes";


export const userReducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_STARTS:
      return {
        ...state,
        isLoading: true,
      };

    case LOADING_STOPS:
      return {
        ...state,
        isLoading: false,
      };

    case LOGIN_USER:
      return {
        ...state,
        users: payload.users,
        isLoading: false,
      };

    default:
      return state;
  }
};
