const getItem = (itemId, cart) => {
    return cart.find( item => item.id === itemId);
}

export const isInCart = (cart, id) => {

    return (id === undefined || cart === undefined) ? undefined : getItem(id, cart) !== undefined;
}