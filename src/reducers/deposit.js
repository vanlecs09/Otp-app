import { SELECT_CARD, SELECT_CARD_VALUE, RESET_DEPOSIT } from '../actions';

const deposit = (state = { cardIndex: 0, cardValueIndex: 0 }, action) => {
    const { type, cardIndex, cardValueIndex } = action;
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
            var obj = {
                ...state,
                cardIndex: 0,
                cardValueIndex: 0
            }
            console.log(obj);
            return obj;
        }
    }
    return state;
}

export default deposit;