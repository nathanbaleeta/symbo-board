import axios from "axios";

import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../constants/ActionTypes";

// LOGIN USER
export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  async function signUp() {
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

  signUp();
};
