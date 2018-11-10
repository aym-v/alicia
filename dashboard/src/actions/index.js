export const AUTHENTICATE = 'AUTHENTICATE';
const authenticate = (username, password) => {
    return {
        type: AUTHENTICATE,
        username,
        password
    }
}

export const AUTHENTICATED = 'AUTHENTICATED';
const authenticated = (token) => {
    console.log(token)
    return {
        type: AUTHENTICATED,
        token
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(authenticate(username, password))
        const response = await fetch('http://127.0.0.1:4000/user/authenticate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ username, password })
        });
        console.log(await response.json())
    }
}