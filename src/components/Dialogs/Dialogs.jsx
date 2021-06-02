import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
//import { updateNewMessageData } from '../../redux/state';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogsPage.messagesData.map((message) => <Message text={message.text} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let messageText = newMessageElement.current.value;
        props.sendMessage(messageText);
        newMessageElement.current.value = '';


    }
    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessageData(messageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} className={classes.messageInputArea}></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;