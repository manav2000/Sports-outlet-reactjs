import { storeProducts } from '../shared/data';
import * as ActionTypes from './ActionTypes';


export const Products = (state = {
    total: null,
    products: storeProducts
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            let id = action.payload.productId;
            return Object.assign({}, state, {
                products: state.products.map((product, productId) => {
                    if (productId === id) {
                        return Object.assign({}, product, {
                            inCart: !product.inCart,
                            count: 1,
                            total: product.price
                        })
                    }
                    return product;
                })
            })

        case ActionTypes.INCR_ITEM:
            return Object.assign({}, state, {
                products: state.products.map((product, productId) => {
                    if (productId === action.payload.productId) {
                        return Object.assign({}, product, {
                            count: action.payload.count + 1,
                            total: action.payload.total + product.price
                        })
                    }
                    return product;
                })
            })

        case ActionTypes.DECR_ITEM:
            return Object.assign({}, state, {
                products: state.products.map((product, productId) => {
                    if (productId === action.payload.productId) {
                        return Object.assign({}, product, {
                            count: action.payload.count - 1,
                            total: action.payload.total - product.price
                        })
                    }
                    return product;
                })
            })

        case ActionTypes.EMPTY_CART:
            return Object.assign({}, state, {
                products: state.products.map((product) => {
                    for (let i = 0; i < action.payload.length; i++) {
                        if (action.payload[i].id === product.id) {
                            return Object.assign({}, product, {
                                inCart: false,
                                count: 0,
                                total: 0
                            })
                        }
                    }
                    return product;
                })
            })

        case ActionTypes.GET_TOTAL:
            return { ...state, total: action.total }

        default:
            return state
    }
}