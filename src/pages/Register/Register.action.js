
import axios from 'axios';

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTERSUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export function registerRequestAction() {
    return {
        type: REGISTER_REQUEST
    }
}

export function registerSuccessAction(token) {
    return {
        type: REGISTER_SUCCESS,
        data: token
    }
}

export function registerFailureAction(error) {
    return {
        type: REGISTER_FAILURE,
        error: error
    }
}

export function registerAccountAction(data, history) {
    return async (dispatch) => {
        dispatch(registerRequestAction);
        try {
            const result = await axios({
                method: "POST",
                url: "https://min-shop.herokuapp.com/rest/user/signUp",
                data,
            });
            dispatch(registerSuccessAction(result));
            history.push('/login');
        } catch (error) {
            console.log(error.response.data.message);
            dispatch(registerFailureAction(error.response.data.message));
        }
    }
}