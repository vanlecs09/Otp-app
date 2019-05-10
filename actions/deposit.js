export const SELECT_CARD = "SELECT_CARD";
export const SELECT_CARD_VALUE = "SELECT_CARD_VALUE";

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
