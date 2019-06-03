import { SELECT_CARD, SELECT_CARD_VALUE, RESET_DEPOSIT, 
    START_REQUEST, STOP_REQUEST, REQUEST_ERROR, DEPOSIT_REQUEST_SUCCESS, DEPOSIT_STATE_NONE } from '../actions';

const deposit = (state = { isLoading: false, cardIndex: 0, cardValueIndex: 0, showAlert: false }, action) => {
    const { type, cardIndex, cardValueIndex } = action;
    console.log(type);
    switch (type) {
        case SELECT_CARD: {
            return {
                ...state,
                cardIndex: cardIndex
            }
        }
        case SELECT_CARD_VALUE: {
            return {
                ...state,
                cardValueIndex: cardValueIndex,
            }
        }
        case RESET_DEPOSIT: {
            return {
                ...state,
                cardIndex: 0,
                cardValueIndex: 0
            };
        }
        case START_REQUEST: {
            return {
                ...state,
                status: DEPOSIT_STATE_NONE,
                isLoading: true,
            }
        }
        case STOP_REQUEST: {
            return {
                ...state,
                status: DEPOSIT_STATE_NONE,
                isLoading: false,
                showAlert: true,
            }
        }
        case DEPOSIT_REQUEST_SUCCESS: {
            return  {
                ...state,
                status: DEPOSIT_REQUEST_SUCCESS,
                isLoading: false,
                showAlert: true,
            }
        }
    }
    return state;
}

export default deposit;