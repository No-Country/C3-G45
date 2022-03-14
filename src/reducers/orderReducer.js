import { types } from "types/types"

export const orderReducer = (state = {}, action ) => {
    switch(action.type){

        case types.buyCart:
            return{
                order: action.payload
            }

        default: 
            return state;
    }
}