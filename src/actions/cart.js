import { types } from "../types/types"

export const startAddToCart = ( currentCart ) => {
    return (dispatch) => {
        dispatch( addToCart( currentCart ))
    }
}

const addToCart = ( currentCart ) => {

    return {
        type: types.addToCart,
        payload: currentCart
    }
}