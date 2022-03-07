import { types } from "../types/types";

export const authReducer = (state = { }, action) => {
  switch (action.type) {
    case types.login:
      return {
        accessToken: action.payload.accessToken,
        name: action.payload.displayName,
        password: action.payload.password,
        session: true,
      };

    case types.register:
      return {
        uid: action.payload.uid,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.userName,
        email: action.payload.email,
        password: action.payload.password
      };

    case types.logout:
      return {
        ...state,
        session: false
      };

    default:
      return state;
  }
};
