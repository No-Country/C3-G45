import { types } from "../types/types";

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

export const startRemoveItem = (currentCart, removeItem) => {

    const newCurrentCart = removeToCart( currentCart, removeItem );

    return (dispatch) => {
        dispatch( addToCart( newCurrentCart ))
    }
}

const removeToCart = (currentCart, removeItem) => {
    const newCurrentCart = currentCart.filter( item => item.id === removeItem );

    return newCurrentCart;
}