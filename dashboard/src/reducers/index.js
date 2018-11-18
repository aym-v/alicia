import { AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR, LOGOUT, REGISTERING, REGISTER_SUCCESS, REGISTER_ERROR, FETCHING_ADS, FETCHING_ADS_SUCCESS, FETCHING_ADS_ERROR } from '../actions'

const initialState = {
    auth: {
        isFetching: false,
        token: false,
        error: false
    },
    register: {
        isFetching: false,
        error: false,
        registered: false
    },
    ads: {
        isFetching: false,
        error: false,
        list: []
    }
}

const reducer = (previousState = initialState, action) => {
    switch (action.type) {
        case REGISTERING:
            return {
                ...previousState,
                register: {
                    ...previousState.register,
                    isFetching: true,
                    error: false
                }
            }
        case REGISTER_SUCCESS:
            return {
                ...previousState,
                register: {
                    ...previousState.register,
                    isFetching: false,
                    error: false,
                    registered: true
                }
            }
        case REGISTER_ERROR:
            return {
                ...previousState,
                register: {
                    ...previousState.register,
                    isFetching: false,
                    error: true,
                    registered: false
                }
            }
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
                    token: action.token,
                    user: action.user
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
        case LOGOUT:
            return {
                ...previousState,
                auth: initialState.auth,
                register: {
                    isFetching: false,
                    error: false,
                    registered: false
                }
            }
        case FETCHING_ADS:
            return {
                ...previousState,
                ads: {
                    isFetching: true,
                    error: false
                }
            }
        case FETCHING_ADS_SUCCESS:
            return {
                ...previousState,
                ads: {
                    list: action.ads,
                    isFetching: false,
                    error: false
                }
            }
        case FETCHING_ADS_ERROR:
            return {
                ...previousState,
                ads: {
                    isFetching: false,
                    error: true
                }
            }
        default:
            return previousState
    }
}

export default reducer