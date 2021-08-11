import { UPDATE_PROFILE_TYPE, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from "./types";

const DEFAULT_STATE = {
  isAuthenticated: false,
  //   name: "",
    role: "",
  //   access_token: "",
  errorMessage: "",
  //   nokiaid: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_TYPE:
      return {
        ...state,
        type: action.payload.type
      };
    case AUTH_SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        nokiaid: action.payload.nokiaid,
        isAuthenticated: true,
        errorMessage: "",
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        access_token: action.payload,
        username: action.payload_username,
        // email: action.payload_email,
        role: action.payload_role,
        // nokiaid: action.payload_nokiaid,
        isAuthenticated: false,
        errorMessage: "",
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
