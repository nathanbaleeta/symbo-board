import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../../constants/ActionTypes";

// SIGN IN USER
export const signIn = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  async function login() {
    try {
      await axios
        .post("http://127.0.0.1:8000/auth/token/login", body, config)
        .then(res => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
        })
        .catch(err =>
          dispatch({
            type: LOGIN_FAIL,
            payload: err
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  login();
};

// SIGN UP USER
export const signUp = (email, username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, username, password });

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
            type: REGISTER_FAIL,
            payload: err
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  createUser();
};
