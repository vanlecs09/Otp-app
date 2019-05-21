export const SELECT_CARD = "SELECT_CARD";
export const SELECT_CARD_VALUE = "SELECT_CARD_VALUE";
export const RESET_DEPOSIT = "RESET_DEPOSIT";

export const selectCard = (cardIndex) => {
    return {
        type : SELECT_CARD,
        cardIndex : cardIndex
    }
}

export const selectCardValue = (cardValueIndex) => {
    return {
        type :SELECT_CARD_VALUE,
        cardValueIndex : cardValueIndex,
    }
}

export const resetDeposit = () => {
    return {
            type : RESET_DEPOSIT,
        // cardIndex : cardIndex
    }
}