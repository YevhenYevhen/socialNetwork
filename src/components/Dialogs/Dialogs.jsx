import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map((message) => <Message text={message.text} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let messageText = newMessageElement.current.value;
        props.sendMessage(messageText);
        newMessageElement.current.value = '';
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} className={classes.messageInputArea}></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;