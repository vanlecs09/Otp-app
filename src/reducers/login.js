import { START_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, STOP_LOGIN, LOGIN_NONE, HIDE_ALERT, LOGIN_BACK, ENTER_PIN_ERROR, ENTER_PIN_SUCESS} from '../actions';

const login = (state = { isLoading: false, loginStatus: LOGIN_NONE, showAlert: false, isLogged: false}, action) => {
    const { type, showAlert } = action;

    switch (type) {
        case START_LOGIN: {
            return {
                ...state,
                loginStatus: LOGIN_NONE,
                isLoading: action.isLoading,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginStatus: LOGIN_SUCCESS,
                isLoading: action.isLoading,
                showAlert: true,
                // isLogged: false,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginStatus: LOGIN_ERROR,
                isLoading: action.isLoading,
                errorMessage: action.errorMessage,
                showAlert: true,
                isLogged: false,
            }
        }
        case STOP_LOGIN: {
            return {
                ...state,
                loginStatus: LOGIN_NONE,
                isLoading: action.isLoading,
            }
        }
        case HIDE_ALERT: {
            return {
                ...state,
                showAlert: false,
            }
        }
        case LOGIN_BACK: {
            return {
                ...state,
                showAlert: false,
                loginStatus: LOGIN_NONE,
                isLoading: false,
                isLogged: false, 
            }
        }
        case ENTER_PIN_ERROR: {
            return {
                ...state,
                loginStatus: ENTER_PIN_ERROR,
                isLoading: false,
            }
        }
        case ENTER_PIN_SUCESS: {
            return {
                ...state,
                loginStatus: ENTER_PIN_SUCESS,
                isLoading: false,
                isLogged: true,
                // showAlert: true,
            }
        }
    }

    return state;
}

export default login;