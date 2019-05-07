
export const START_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const LOGIN_ERROR = 'REQUEST_LOGIN_FAILURE';
export const STOP_LOGIN = 'STOP_REQUEST_LOGIN';


const requestLoginPhone = (phoneNumber) => {
    return (dispatch) => {
        dispatch(startLogin());
        if (!phoneNumber) {
            dispatch(loginError('wrong user name pass'))
            dispatch(stopLogin());
            return;
        }
    }
}

const requestLoginByPass = (username, password) => {

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

const loginError = (errorMessage) => {
    return {
        type: LOGIN_ERROR,
        errorMessage: errorMessage,
        isLoading: false,
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

export default  {
    requestLoginByPass
}

