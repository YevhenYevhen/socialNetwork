import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
        props.setMessageMode(true);
    }
    return (
        <NavLink to={path}>
            <div onClick={handleClick} className={active ? classes.activeDialog : classes.dialog}>
                <img className={classes.dialogPhoto} src={props.photo} alt="" />
                <div>
                    <div className={classes.dialogName}>{props.name}</div>
                    <div>{props.messages[0].text}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem;