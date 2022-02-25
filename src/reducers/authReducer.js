import { types } from "../types/types";

const initialState = {
  session: false
}

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
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
