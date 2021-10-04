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
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let authUserData = dispatch(getAuthUserData());  
   Promise.all([authUserData]).then(() => dispatch(initializedSuccess()))
    
}



export default appReducer;






