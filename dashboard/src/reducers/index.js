import { AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../actions'

const initialState = {
    auth: {
        isFetching: false,
        token: false
    }
}

const reducer = (previousState = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            return {
                ...previousState,
                auth: {
                    ...previousState.auth,
                    isFetching: true
                }
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...previousState,
                auth: {
                    isFetching: false,
                    token: action.token
                }
            }
        case AUTHENTICATION_ERROR:
            return {
                ...previousState,
                auth: {
                    isFetching: false,
                    token: false
                }
            }
        default:
            return previousState
    }
}

export default reducer