import * as actionTypes from "./Login.action";

const initState = {
    data: null,
    loading: false,
    error: null
}

function LoginReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.token
            }

        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default LoginReducer