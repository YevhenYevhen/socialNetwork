import { usersAPI } from './../Api/api';
import { updateObjectInArray } from '.././utilites/objectHelper';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-IN-PROGRESS';
const RESET_USERS = 'RESET_USERS';

let initialState = {
    users: [],
    followedUsers: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
                /*  users: state.users.map(u => {
                     if (u.id === action.userId) {
                         return { ...u, followed: true }
                     }
                     return u;
                 }) */
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
                /*                 users: state.users.map(u => {
                                    if (u.id === action.userId) {
                                        return { ...u, followed: false }
                                    }
                                    return u;
                                }) */
            }
        case SET_USERS:
            /* return { ...state, users: [...state.users, ...action.users] } */
            //CHANGED THIS ONE TO GET 10 USERS A PAGE. THIS WAY USERS GET REWRITTEN EVERYTIME THE PAGE CHANGES

            return { ...state, users: [...state.users, ...action.users] }


        case RESET_USERS:
            return {
                ...state,
                users: []
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching ?
                    [...state.isFollowingInProgress, action.userId] :
                    state.isFollowingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}


/* export const getUsers = (CurrentPage, pageSize) => {
    
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(CurrentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setCurrentPage(CurrentPage))
    }
} */


export const getUsers = (pageNumber) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(pageNumber);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, action) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(action(userId));
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
}


export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const resetUsers = () => ({ type: RESET_USERS })
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })
export default usersReducer;