import { authAPI, profileAPI, securityAPI } from "../Api/api";
const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';
const SET_AUTH_USER_POFILE = 'auth/SET-AUTH-USER-PROFILE';
const SET_AUTH_USER_PHOTO = 'auth/SET-AUTH-USER-PHOTO';




let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
    authUserProfile: null,
    authUserPhoto: null

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                //  isAuth: true
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        case SET_AUTH_USER_POFILE:
            return {
                ...state,
                authUserProfile: action.profile
            }
        case SET_AUTH_USER_PHOTO:
            return {
                ...state,
                authUserPhoto: action.photo
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl })
export const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_POFILE, profile })
export const setAuthUserPhoto = (photo) => ({ type: SET_AUTH_USER_PHOTO, photo })




/* export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
            
        }
}
 */
//=====================================THIS IS WHAT IT LOOKED LIKE BEFORE ASYNC AWAIT=====================================//




export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        let authUserId = response.data.data.id;
        let authUser = await profileAPI.getProfile(authUserId);
        let authUserProfile = authUser.data;
        let authUserPhoto = authUser.data.photos.large;
        dispatch(setAuthUserProfile(authUserProfile));
        dispatch(setAuthUserPhoto(authUserPhoto))
    }

}



export const login = (email, password, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let error = response.data.messages[0];
        return error;
    }
}



export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(setAuthUserProfile(null));
        dispatch(setAuthUserPhoto(null));
    }
}

export default authReducer;






