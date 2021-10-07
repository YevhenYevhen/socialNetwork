import React, { useState } from 'react'
import { useEffect } from 'react';
import classes from './ProfileInfo/ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);



    return (
        <div>
            <div>
                {props.isOwner && editMode && <input onChange={onStatusChange}
                    value={status} autoFocus={true}
                    onBlur={deactivateEditMode} >
                </input>}
            </div>
            {!editMode && status &&
                <div className={classes.status} onClick={props.isOwner ? activateEditMode : null}>
                    {status}
                </div>}
            {!editMode && !status && props.isOwner &&
                <div onClick={props.isOwner ? activateEditMode : null}>
                    <span>Enter your status...</span>   
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;