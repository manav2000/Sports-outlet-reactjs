import * as ActionTypes from './ActionTypes';

export const Checkout = (state = {
    isProcessing: false,
    isProcessed: false,
}, action) => {
    switch (action.type) {
        case ActionTypes.PROCESSING:
            return { ...state, isProcessing: true, isProcessed: false }

        case ActionTypes.PROCESSED:
            return { ...state, isProcessing: false, isProcessed: true }

        default:
            return state;
    }
}
