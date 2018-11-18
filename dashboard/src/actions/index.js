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

export const FETCHING_ADS = 'FETCHING_ADS';
const fetchingAds = () => ({
    type: FETCHING_ADS
})

export const FETCHING_ADS_SUCCESS = 'FETCHING_ADS_SUCCESS';
const fetchingAdsSuccess = (ads) => ({
    type: FETCHING_ADS_SUCCESS,
    ads
})

export const FETCHING_ADS_ERROR = 'FETCHING_ADS_ERROR';
const fetchingAdsError = () => ({
    type: FETCHING_ADS_ERROR
})

export const getAds = (token) => {
    return async dispatch => {
        dispatch(fetchingAds());
        const response = await fetch('http://127.0.0.1:4000/ads', {
            method: 'get',
            headers: {
                'Accept': '*/*',
                'Authorization': token
            }
        });
        const json = await response.json();
        if (json) {
            dispatch(fetchingAdsSuccess(json));
        } else {
            dispatch(fetchingAdsError());
        }

    }
}

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