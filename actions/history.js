export const SELECT_DEPOSIT_HISTORY = "SELECT_DEPOSIT_HISTORY";
export const SELECT_GIFT_EXCHANGE_HISTORY = "SELECT_GIT_EXCHANGE_HISTORY";

export const selectDepositHistory = () => {
    return {
        type : SELECT_DEPOSIT_HISTORY,
        // cardIndex : cardIndex
    }
}

export const selectGiftExchangeHistory = () => {
    return {
        type :SELECT_GIFT_EXCHANGE_HISTORY,
        // cardValueIndex : cardValueIndex,
    }
}
