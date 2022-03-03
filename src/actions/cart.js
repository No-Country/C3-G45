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

/* Remove Item from cart */
export const startRemoveItem = ( currentCart, item ) => {

    const filteredOrder = currentCart.filter( event => event.id !== item);

    return (dispatch) => {
        dispatch( removeToCart( filteredOrder ))
    }
}

const removeToCart = ( filteredOrder ) => {
    return{
        type: types.removeToCart,
        payload: filteredOrder
    } 
}