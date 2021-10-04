import { sendMessageActionCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
//import StoreContext from '../../StoreContext';



/* const DialogsContainer = (props) => {

    // let state = props.store.getState();
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
            
                let onMessageChange = (messageText) => {
                    let action = onMessageChangeActionCreator(messageText);
                    store.dispatch(action);
                }
                 
                return <Dialogs sendMessage={sendMessage}
                    updateNewMessageData={onMessageChange}
                    dialogsPage={state.dialogsPage} />
                
            }
        }
        </StoreContext.Consumer>
    )
} */


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        authUserPhoto: state.auth.authUserPhoto
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => {
            dispatch(sendMessageActionCreator(messageText));
        },/* 
        updateNewMessageData: (messageText) => {
            let action = onMessageChangeActionCreator(messageText);
            dispatch(action);
        } */
    }
}


/* let AuthRedirectComponent = withAuthRedirect(Dialogs);
  
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer; */


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)