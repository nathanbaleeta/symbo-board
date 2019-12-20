import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USER_LOADED,
  AUTH_ERROR
} from "../../constants/ActionTypes";

// SIGN UP USER
export const signUp = (first_name, last_name, email, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password
  });

  async function createUser() {
    try {
      await axios
        .post("http://127.0.0.1:8000/auth/users/", body, config)
        .then(res => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          });
        })
        .catch(err =>
          dispatch({
            type: REGISTER_FAILURE,
            payload: err
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  createUser();
};

// SIGN IN USER
export const signIn = (email, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });

  async function login() {
    try {
      await axios
        .post("http://127.0.0.1:8000/auth/token/login/", body, config)
        .then(res => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
          dispatch(loadUser());
        })
        .catch(err =>
          dispatch({
            type: LOGIN_FAILURE,
            payload: err
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  login();
};

// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/auth/users/me/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data.id
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// SIGN OUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/auth/token/logout/",
      null,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_FAILURE
      });
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.auth_token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
