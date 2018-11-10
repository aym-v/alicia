export const AUTHENTICATE = 'AUTHENTICATE';
const authenticate = (user, password) => {
    return {
        type: AUTHENTICATE,
        user,
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

export const login = (user, password) => {
    return async (dispatch) => {
        dispatch(authenticate(user, password))
        const response = await fetch('http://127.0.0.1:4000/user/authenticate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ user, password })
        });
        console.log(await response.json())
    }
}