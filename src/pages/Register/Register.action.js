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

export function registẻFailureAction(error) {
    return {
        type: REGISTER_FAILURE,
        error: error
    }
}