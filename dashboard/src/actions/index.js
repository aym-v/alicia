export const AUTHENTICATION = 'AUTHENTICATION';
const authentication = (user, password) => ({
    type: AUTHENTICATION,
    user,
    password
})

export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
const authenticationSuccess = (token, user) => ({
    type: AUTHENTICATION_SUCCESS,
    token,
    user
})

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
const authenticationError = () => ({
    type: AUTHENTICATION_ERROR
})

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT
})

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
})

export const REGISTER_ERROR = 'REGISTER_ERROR';
const registerError = () => ({
    type: REGISTER_ERROR
})

export const REGISTERING = 'REGISTERING';
const registering = (user, password, secret) => ({
    type: REGISTERING,
})

export const login = (user, password) => {
    return async dispatch => {
        dispatch(authentication(user, password))
        const response = await fetch('http://127.0.0.1:4000/user/authenticate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ user, password })
        });
        const json = await response.json();
        if (json.auth === true) {
            dispatch(authenticationSuccess(json.token, user));
        } else {
            dispatch(authenticationError());
        }
    }
}

export const register = (user, password, secret) => {
    return async dispatch => {
        dispatch(registering())
        const response = await fetch('http://127.0.0.1:4000/user/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ user, password, secret })
        });
        const json = await response.json();
        if (json.register === 'success') {
            dispatch(registerSuccess());
        } else {
            dispatch(registerError());
        }
    }
}