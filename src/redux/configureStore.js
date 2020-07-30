import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Products } from './products';
import { Checkout } from './checkout';
import CheckoutDetails from './forms';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            products: Products,
            checkout: Checkout,
            ...createForms({
                details: CheckoutDetails
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}