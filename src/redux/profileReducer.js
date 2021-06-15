const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    postsData: [
        { id: 1, message: 'This is my first post!', likesCounter: 12 },
        { id: 2, message: 'This is crazy!', likesCounter: 34 },
        { id: 6, message: 'I am so excited', likesCounter: 0 }
    ],
    newPostData: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostData,
                likesCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: state.newPostData}],
                newPostData: ''
            };
            //stateCopy.postsData = [...state.postsData];
            // stateCopy.postsData.push(newPost);
            // stateCopy.newPostData = '';
            //return stateCopy;
        }
        case UPDATE_NEW_POST_DATA: {
            return {
                ...state,
                newPostData: action.currentText
            };
           // stateCopy.newPostData = action.currentText;
            //return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        default:
            return state;
   }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_DATA,
    currentText: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;