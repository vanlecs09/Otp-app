import { REQUEST_LOGIN } from '../actions';

const login = (state = {isFetching : false}, action) => {
    if (action.type == REQUEST_LOGIN) {
        console.log("return here");
        return {
            isFetching : true
        }
    }

    return state;
}

export default login;