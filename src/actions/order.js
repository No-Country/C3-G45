import { types } from "types/types";

export const startBuy = (token, order) => {
    return (dispatch) => {
        dispatch(buyCart(token, order));
    };
};
const buyCart = (token, order) => {
    return {
        type: types.buyCart,
        payload: {
            token,
            order
        },
    };
};