
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const STOP_LOGIN = 'STOP_LOGIN';
export const LOGIN_NONE = 'LOGIN_NONE';
export const HIDE_ALERT = 'HIDE_ALERT';
export const LOGIN_BACK = 'LOGIN_BACK';


export const requestLoginPhone = (phoneNumber) => {
    return (dispatch) => {
        dispatch(startLogin());
        if (!phoneNumber) {
            dispatch(stopLogin());
            dispatch(loginError('Please Enter Phone Number'))
            return;
        }

        var url = 'http://api.vosovang.com/api/otp?phone='+ phoneNumber;

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

export const reuqestLoginPin = (pinCode) => {
    return (dispatch) => {
        dispatch(startLogin());
        if (!phoneNumber) {
            dispatch(stopLogin());
            dispatch(loginError('Please Enter Phone Number'))
            return;
        }



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