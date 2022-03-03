import { types } from "../types/types"

export const cartReducer = (state = {}, action ) => {
    switch(action.type){
        case types.addToCart:
            return {
                event: action.payload
            };
        default: 
            return state;
    }
}