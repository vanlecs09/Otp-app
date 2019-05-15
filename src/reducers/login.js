import { START_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, STOP_LOGIN } from '../actions';

const login = (state = { isLoading: false }, action) => {
    const { type, payload } = action;

    switch (type) {
        case START_LOGIN: {
            return {
                isLoading: action.isLoading,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                isLoading: action.isLoading,
            }
        }
        case LOGIN_ERROR: {
            return {
                isLoading: action.isLoading,
            }
        }
        case STOP_LOGIN: {
            return {
                isLoading: action.isLoading,
            }
        }
    }

    return state;
}

export default login;