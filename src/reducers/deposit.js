import {SELECT_CARD, SELECT_CARD_VALUE} from '../actions';

const deposit = (state = { cardIndex : -1, cardValueIndex : -1}, action) => {
    const {type, cardIndex, cardValueIndex} = action;
    switch(type) {
        case SELECT_CARD:{
            return {
                ...state,
                cardIndex: cardIndex
            }
            break;
        }
        case SELECT_CARD_VALUE:{
            return {
                ...state,
                cardValueIndex: cardValueIndex,
            }
            break;
        }
    }

    return state;
}

export default deposit;