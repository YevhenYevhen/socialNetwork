import React, { useState, useEffect, useRef } from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsFormContainer from './DialogsForm';
import { useWindowWidth } from '../Common/useWindowWidth'


const Dialogs = (props) => {

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };
    const windowWidth = useWindowWidth();

    const [messageMode, setMessageMode] = useState(false)
    const messages = props.dialogsPage.messagesData.slice().reverse();

    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem
        setMessageMode={setMessageMode} messages={messages}
        name={dialog.name} key={dialog.id} id={dialog.id} photo={dialog.photo} />);
    const messagesElements = props.dialogsPage.messagesData.map(message => <Message key={message.id}
        authUserPhoto={props.authUserPhoto} text={message.text} />);



    if (windowWidth < 700)
        return (<>
            <div className={classes.wrapper}>
            {messageMode && <div className={classes.back} onClick={() => setMessageMode(false)}><span> &larr; Back</span></div>}
                {!messageMode && <div className={classes.dialogsContainer}>
                    {dialogsElements}
                </div>}
                {messageMode && <>
                    <div className={classes.messagesContainer}>
                        {messagesElements}
                        <AlwaysScrollToBottom />
                    </div>
                    <div className={classes.formContainer}>
                        <DialogsFormContainer sendMessage={props.sendMessage} />
                    </div>
                </>
                }
            </div>
        </>
        )
    if (windowWidth > 700)
        return (
            <div className={classes.wrapper}>
                <div className={classes.dialogsContainer}>
                    {dialogsElements}
                </div>
                <div className={classes.messagesContainer}>
                    {messagesElements}
                    <AlwaysScrollToBottom />
                </div>
                <div className={classes.formContainer}>
                    <DialogsFormContainer sendMessage={props.sendMessage} />
                </div>
            </div>
        )
}



export default Dialogs;