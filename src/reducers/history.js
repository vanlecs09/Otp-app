import { SELECT_DEPOSIT_HISTORY, SELECT_GIFT_EXCHANGE_HISTORY } from '../actions';

const deposit = (state = { historyState : SELECT_DEPOSIT_HISTORY }, action) => {
    const { type } = action;
    switch (type) {
        case SELECT_DEPOSIT_HISTORY: {
            return {
                ...state,
                historyState: SELECT_DEPOSIT_HISTORY
            }
            break;
        }
        case SELECT_GIFT_EXCHANGE_HISTORY: {
            return {
                ...state,
                historyState: SELECT_GIFT_EXCHANGE_HISTORY,
            }
            break;
        }
    }

    return state;
}

export default deposit;