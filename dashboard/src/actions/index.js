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

export const login = (user, password) => {
    return async (dispatch) => {
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