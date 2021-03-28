export const addToBasket = (product) => {
    return {
        type: 'ADD_TO_BASKET',
        payload: product
    }
}

export const removeFromBasket = (id) => {
    return {
        type: 'REMOVE_FROM_BASKET',
        payload: id
    }
}