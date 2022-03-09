import { types } from "types/types";
import {postOrder} from 'helpers/crudFunctions'

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
export const startBuy =(token, cart) =>{
    console.log(token, cart)
    return (dispatch) =>{
        dispatch(buyCart(token, cart))
        // cart.map(item => {
        //     postOrder(item.id)
        //         .then(() => {
                    
        //         })
        // })
    }
}
const buyCart = (token, cart) => {
    console.log(token, cart)
    return {
        type: types.buyCart,
        payload: {
            token,
            cart
        }
    }
}


/* Clear cart */
export const startClearCart = () => {
    return(dispatch) => {
        dispatch(clearCart())
    }
}

const clearCart = () => {
    return {
        type: types.clearCart,
        payload: []
    }
}