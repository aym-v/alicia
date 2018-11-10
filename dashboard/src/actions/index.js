const AUTHENTICATE = 'AUTHENTICATE';
const authenticate = (username, password) => {
    return {
        type: AUTHENTICATE,
        username,
        password
    }
}

const AUTHENTICATED = 'AUTHENTICATED';
const authenticated = (token) => {
    console.log(token)
    return {
        type: AUTHENTICATED,
        token
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(authenticate(username, password))
        return fetch('http://localhost:4000/user/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(
                response => console.log(response)
            )
            .then(
                json => authenticated(json)
            )
    }
}