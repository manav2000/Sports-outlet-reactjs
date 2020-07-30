import * as ActionTypes from './ActionTypes';


export const addToCart = (productId) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: {
        productId: productId
    }
})

export const incrItem = (productId, count, total) => ({
    type: ActionTypes.INCR_ITEM,
    payload: {
        productId: productId,
        count: count,
        total: total
    }
})

export const decrItem = (productId, count, total) => ({
    type: ActionTypes.DECR_ITEM,
    payload: {
        productId: productId,
        count: count,
        total: total
    }
})

export const emptyCart = (productsInCart) => ({
    type: ActionTypes.EMPTY_CART,
    payload: productsInCart
})

export const getTotal = (total) => ({
    type: ActionTypes.GET_TOTAL,
    total: total
})

export const checkoutProcess = () => (dispatch) => {
    dispatch(processing(true));

    setTimeout(() => {
        dispatch(processed(false));
    }, 10000);
}

export const processing = () => ({
    type: ActionTypes.PROCESSING,
})

export const processed = () => ({
    type: ActionTypes.PROCESSED,
})