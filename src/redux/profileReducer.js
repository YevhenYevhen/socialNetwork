import { profileAPI, usersAPI } from "../Api/api";
const ADD_POST = 'profile/ADD-POST';
//const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const UPDATE_STATUS = 'profile/UPDATE-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_NEW_MAIN_PIC_SUCCESS = 'profile/SAVE-NEW-MAIN-PIC-SUCCESS';


let initialState = {
    postsData: [
        { id: 1, message: 'This is my first post!', likesCounter: 12 },
        { id: 2, message: 'This is crazy!', likesCounter: 34 },
        { id: 6, message: 'I am so excited', likesCounter: 0 }
    ],
    newPostData: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostData,
                likesCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: action.newPostData}],
                //newPostData: ''
            };
            //stateCopy.postsData = [...state.postsData];
            // stateCopy.postsData.push(newPost);
            // stateCopy.newPostData = '';
            //return stateCopy;
        }
      /*   case UPDATE_NEW_POST_DATA: {
            return {
                ...state,
                newPostData: action.currentText
            };
           // stateCopy.newPostData = action.currentText;
            //return stateCopy;
        } */
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            };
        }
/*         case UPDATE_STATUS: {
            return {
                ...state, status: action.status
            }
        } */
        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(p => p.id != action.postId )
            };
        }
        case SAVE_NEW_MAIN_PIC_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
   }
}


export const addPostActionCreator = (postData) => ({ type: ADD_POST, newPostData: postData })
/* export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_DATA,
    currentText: text
}) */
export const deletePost = (postId) => ({ type: DELETE_POST, postId: postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const saveNewMainPicSuccess = (photos) => ({ type: SAVE_NEW_MAIN_PIC_SUCCESS, photos })




export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
          dispatch(setUserProfile(response.data));
}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        
            dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
}

export const saveNewMainPic = (file) => async (dispatch) => {
    let response = await profileAPI.saveNewMainPic(file);
             if (response.data.resultCode === 0) {
                 dispatch(saveNewMainPicSuccess(response.data.data.photos));
             }
 }


export const saveProfile = (profile) => async (dispatch, getState) => {
   let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
             if (response.data.resultCode === 0) {
                 dispatch(setUserProfile(userId));
             }
 }

export default profileReducer;


