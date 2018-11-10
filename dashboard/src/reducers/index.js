import { AUTHENTICATE, AUTHENTICATED } from '../actions'

const reducer = (previousState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...previousState,
                authenticating: true
            }
        case AUTHENTICATED:
            return {
                ...previousState,
                authenticating: false
            }
        default:
            return previousState
    }
    return previousState
}

export default reducer