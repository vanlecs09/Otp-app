// import fetch from 'cross-fetch'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

export const requestLogin = () => {
    return {
        type: REQUEST_LOGIN,
    }
}

// export const requestLogin = user => {
//     // return dispatch => {
//         dispatch(login())
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())
//             .then(json => dispatch(receiveLogin(subreddit, json)))
//     }
// }

