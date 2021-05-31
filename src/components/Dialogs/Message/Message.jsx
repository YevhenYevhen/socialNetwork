import classes from './../Dialogs.module.css';



const Message = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.text}</div>
        </div>
    )
}

export default Message;