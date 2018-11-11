import { AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../actions'

const initialState = {
    auth: {
        isFetching: false,
        token: false,
        error: false
    }
}

const reducer = (previousState = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            return {
                ...previousState,
                auth: {
                    ...previousState.auth,
                    isFetching: true,
                    error: false
                }
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...previousState,
                auth: {
                    ...previousState.auth,
                    isFetching: false,
                    error: false,
                    token: action.token
                }
            }
        case AUTHENTICATION_ERROR:
            return {
                ...previousState,
                auth: {
                    ...previousState.auth,
                    isFetching: false,
                    token: false,
                    error: true
                }
            }
        default:
            return previousState
    }
}

export default reducer