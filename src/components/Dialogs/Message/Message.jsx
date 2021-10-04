import classes from './../Dialogs.module.css';
import userPic from '../../../assets/images/user.png';


const Message = (props) => {
    return (
        <div>
            <div className={classes.message}>
                <img className={classes.dialogPhoto} src={props.authUserPhoto || userPic} alt="" />
                {props.text}
            </div>
        </div>
    )
}

export default Message;