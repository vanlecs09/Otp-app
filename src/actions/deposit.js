export const SELECT_CARD = "SELECT_CARD";
export const SELECT_CARD_VALUE = "SELECT_CARD_VALUE";
export const RESET_DEPOSIT = "RESET_DEPOSIT";
export const EXCHANGE_GIFT = "EXCHANGE_GIFT";
export const DEPOSIT_CARD = "DEPOSIT_CARD";
export const START_REQUEST = "START_REQUEST";
export const STOP_REQUEST = "STOP_REQUEST";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const DEPOSIT_REQUEST_SUCCESS = "DEPOSIT_REQUEST_SUCCESS";
export const EXCHANGE_GIFT_REQUEST_SUCCESS = "EXCHANGE_GIFT_REQUEST_SUCCESS";
export const DEPOSIT_STATE_NONE = "DEPOSIT_STATE_NONE";

export const selectCard = (cardIndex) => {
    return {
        type: SELECT_CARD,
        cardIndex: cardIndex
    }
}

export const selectCardValue = (cardValueIndex) => {
    return {
        type: SELECT_CARD_VALUE,
        cardValueIndex: cardValueIndex,
    }
}

export const resetDeposit = () => {
    return {
        type: RESET_DEPOSIT,
    }
}

const startRequest = () => {
    return {
        type: START_REQUEST
    }
}

const stopRequest = () => {
    return {
        type: STOP_REQUEST
    }
}

const requestError = (errorMessage) => {
    return {
        type: REQUEST_ERROR,
        errorMessage,
    }
}

const depositSuccess = () => {
    return {
        type: DEPOSIT_REQUEST_SUCCESS
    }
}

const exchangeGiftSuccess = () => {

}

export const requestExchangeGift = (cardType, cardValue) => {
    return (dispatch) => {
        dispatch(startRequest());
        if (!cardType || !cardValue) {
            dispatch(stopRequest());
            dispatch(requestError('Invalid pinCode or phone number'))
            return;
        }

        setTimeout(() => {
            dispatch(stopRequest());
            dispatch(depositSuccess());
        }, 2000);
    }
}

const test = () => {
    dispatch(stopRequest());
    dispatch(depositSuccess());
}

export const requestDepositCard = (cardType, cardValue) => {
    return (dispatch) => {
        console.log(cardType + " " + cardValue);
        dispatch(startRequest());
        if (cardType == undefined || cardValue == undefined) {
            dispatch(stopRequest());
            dispatch(requestError('Invalid pinCode or phone number'))
            return;
        }

        setTimeout(() => {
            // return (dispatch) => {
            dispatch(stopRequest());
            dispatch(depositSuccess());
            // }
            
        }, 2000);
    }

}
