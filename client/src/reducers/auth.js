import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../constants/ActionTypes";

const initialState = {
  auth_token: localStorage.getItem("auth_token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("auth_token", action.payload.auth_token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };

    case AUTH_ERROR:
    case LOGIN_FAILURE:
      localStorage.removeItem("auth_token");
      return {
        ...state,
        auth_token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    case LOGOUT_FAILURE:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("auth_token");
      return {
        ...state,
        auth_token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
}
