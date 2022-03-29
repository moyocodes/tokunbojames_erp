// @ts-nocheck
import { LOADING_STARTS, LOADING_STOPS } from "types/LoadingTypes";

export const authReducers = (state, action) => {
  const { type } = action;
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

    default:
      return state;
  }
};
