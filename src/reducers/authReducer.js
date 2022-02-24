import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        session: true,
      };

    case types.logout:
      return {
        ...state,
        session: false,
      };

    default:
      return state;
  }
};
