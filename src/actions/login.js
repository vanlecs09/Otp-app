
import * as Configs from '../Configs';
import config from '../popup/config';
import FormData from 'form-data';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const STOP_LOGIN = 'STOP_LOGIN';
export const LOGIN_NONE = 'LOGIN_NONE';
export const HIDE_ALERT = 'HIDE_ALERT';
export const LOGIN_BACK = 'LOGIN_BACK';

export const ENTER_PIN_SUCESS = 'ENTER_PIN_SUCESS';
export const ENTER_PIN_ERROR = 'ENTER_PIN_ERROR';



export const requestLoginPhone = (phoneNumber) => {
    console.log("requestLoginPhone " + phoneNumber);
    return (dispatch) => {
        dispatch(startLogin());
        console.log(phoneNumber);
        if (phoneNumber == undefined) {
            dispatch(stopLogin());
            dispatch(loginError('Please Enter Phone Number ' + phoneNumber))
            return;
        }

        var url = Configs.loginURL + phoneNumber;
        console.log(Configs);
        

        return fetch(url, {
            method: 'GET',
            headers: {
            },
        })
            .then((res) => res.json())
            .then(res => {
                dispatch(stopLogin());
                console.log(res);
                if (res.code == 200) {
                    dispatch(loginSuccess());

                } else {
                    dispatch(loginError(res.message));
                }

            })
            .catch((e) => {
                console.log(e);
                dispatch(loginError('error unknow'));
            });
    }
}

export const reuqestLoginPin = (phoneNumber, pinCode) => {
    return (dispatch) => {
        dispatch(startLogin());

        console.log("reuqestLoginPin " + phoneNumber + " >>>>> " + pinCode);
        if (!pinCode || !phoneNumber) {
            dispatch(stopLogin());
            dispatch(loginError('Invalid pinCode or phone number'))
            return;
        }

        var url = Configs.confrimPinURL;
        console.log(JSON.stringify({
            phone: phoneNumber,
            code: pinCode
        }));

        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phoneNumber,
                code: pinCode
            })
            // body: 'phone=phoneNumber&code=pinCode'
        })
            .then((res) => res.json())
            .then(res => {
                dispatch(stopLogin());
                console.log(res);
                if (res.code == 200) {
                    dispatch(enterPinSucess());

                } else {
                    dispatch(enterPinError(res.message));
                }

            })
            .catch((e) => {
                console.log(e);
                dispatch(enterPinError('error unknow'));
            });
    }
}

export const requestLoginByPass = (username, password) => {

    return (dispatch) => {
        // console.log('request login by passs');
        dispatch(startLogin());
        // if (!username || !password) {
        //     dispatch(loginError('wrong user name pass'))
        //     dispatch(stopLogin());
        //     return;
        // }

        return fetch('https://api.ifish.online/api/users/login', {
            method: 'POST',
            headers: {
                Authorization: "Basic 5479f25d2d499ad3c44371746eae5df9"
            },
            body: JSON.stringify({
                ChannelID: 18,
                PlatformID: 0,
                email: "",
                facebook_token: "",
                game_id: 18,
                google_token: "",
                password: "123123",
                request_id: 1001,
                server_id: 1,
                username: "vanvan222",
            })
        })
            .then((res) => res.json())
            .then(res => {
                dispatch(stopLogin());
                console.log(res);
                if (res.connected) {

                }
            })
            .catch((e) => {
                console.log(e);
                dispatch(loginError('error unknow'));
            });
    }
}

export const showAlert = (message) => {

}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}

export const loginBack = () => {
    return {
        type: LOGIN_BACK,
    }
}

const loginError = (errorMessage) => {
    return {
        type: LOGIN_ERROR,
        errorMessage: errorMessage,
        isLoading: false,
    }
}

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

const enterPinSucess = (errorMessage) => {
    return {
        type: ENTER_PIN_SUCESS,
        errorMessage: errorMessage,
    }
}

const enterPinError = () => {
    return {
        type: ENTER_PIN_ERROR
    }
}

const startLogin = () => {
    return {
        type: START_LOGIN,
        isLoading: true
    }
}

const stopLogin = () => {
    return {
        type: STOP_LOGIN,
        isLoading: false
    }
}