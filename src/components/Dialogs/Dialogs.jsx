import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
//import { updateNewMessageData } from '../../redux/state';
import { onMessageChangeActionCreator, sendMessageActionCreator } from './../../redux/dialogsReducer';



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogsPage.messagesData.map((message) => <Message text={message.text} />);
    let newMessageData = props.dialogsPage.newMessageData;

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
/*         let messageText = newMessageElement.current.value;
        props.dispatch(sendMessageActionCreator());
        newMessageElement.current.value = ''; */


    }
    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessageData(messageText);
       /*  props.dispatch(onMessageChangeActionCreator(messageText)); */
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea placeholder='Enter your message' value={newMessageData} onChange={onMessageChange} ref={newMessageElement} className={classes.messageInputArea}></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;