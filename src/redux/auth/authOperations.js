import axios from "axios";
import {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const register = (user) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("/users/signup", user)
    .then(({ data }) => {
      console.log(data);
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((error) => dispatch(registerError(error.message)));
};

const login = (user) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("/users/login", user)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error.message)));
};

const logout = (user) => (dispatch) => {
  dispatch(logoutRequest());

  axios
    .post("/users/logout", user)
    .then(({ data }) => dispatch(logoutSuccess(data)))
    .catch((error) => dispatch(logoutError(error.message)));
  token.unset();
};

export default {
  getCurrentUser,
  register,
  login,
  logout,
};
