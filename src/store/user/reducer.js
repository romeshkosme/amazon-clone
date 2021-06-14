export const initialState = {
    basket: [],
    user: null
}

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;