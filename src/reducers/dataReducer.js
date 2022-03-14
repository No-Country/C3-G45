import { types } from "types/types";

export const dataReducer = (state = { }, action) => {
  switch (action.type) {
    case types.getEvents:
      return {
        events: action.payload
      };
    default:
      return state;
  }
};
