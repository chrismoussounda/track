import createDataContext from "./createDataContext";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return () => {
    // Signup Logic
  };
};

const signin = (dispatch) => {
  return () => {
    // Signin Logic
  };
};

const signout = (dispatch) => {
  return () => {
    // Signout Logic
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { signup, signin, signout },
  { isSignIn: false }
);
