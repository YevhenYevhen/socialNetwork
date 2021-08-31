import { authAPI } from "../Api/api";
import { getAuthUserData } from "./authReducer";
const INITIALIZED_SUCCESS = 'app/IINITIALIZED-SUCCESS';




let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
              //  isAuth: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
   Promise.all([promise]).then(() => dispatch(initializedSuccess()))
    
}



export default appReducer;






