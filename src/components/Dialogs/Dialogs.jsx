import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Ross' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Chandler' },
        { id: 4, name: 'Monica' },
        { id: 5, name: 'Phoebe' },
        { id: 6, name: 'Joey' }
    ]

    let messagesData = [
        { id: 1, text: 'Hey!' },
        { id: 2, text: 'Call me!' },
        { id: 3, text: 'what???' },
        { id: 4, text: 'where are you?' },
        { id: 5, text: 'hi there' },
        { id: 6, text: 'how you doin?' }
    ]

    {/*======================================================================================================================*/ }
    {/*======================================================================================================================*/ }
    {/*======================================================================================================================*/ }
    {/*========================================THAT'S A REALLY IMPORTANT BIT DOWN BELOW======================================*/ }
    {/*========================================REWATCH LESSON 25 AND READ ABOUT ARRAY.MAP====================================*/ }
    {/*===================================================TEST==============================================================*/ }
    {/*======================================================================================================================*/ }
    {/*======================================================================================================================*/ }
    


    let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = messagesData.map((message) => <Message text={message.text} />);
        
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={classes.messages}>
            {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;