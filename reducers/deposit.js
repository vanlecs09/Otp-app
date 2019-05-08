import {SELECT_CARD} from '../actions';

const deposit = (state = { cardIndex : -1}, action) => {
    const {type, cardIndex} = action;
    switch(type) {
        case SELECT_CARD:{
            return {
                cardIndex: cardIndex
            }
            break;
        }
    }

    return state;
}

export default deposit;