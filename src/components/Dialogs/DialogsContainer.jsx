import React from 'react';
import Message from './Message/Message';
import { onMessageChangeActionCreator, sendMessageActionCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
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
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageData: (messageText) => {
            let action = onMessageChangeActionCreator(messageText);
            dispatch(action);
        }
    }
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;