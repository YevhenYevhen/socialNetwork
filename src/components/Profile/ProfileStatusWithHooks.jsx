import React, { useState } from 'react'
import { useEffect } from 'react';

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
    },[props.status]);

    return (
        <div>
            <div>
                {props.isOwner && editMode && <input onChange={onStatusChange} value={status} autoFocus={true}
                    onBlur={deactivateEditMode} ></input>}
            </div>
            <div>
                {!editMode && <div>{<div onClick={props.isOwner ? activateEditMode : undefined} >{status}</div> ||
                    <div onClick={props.isOwner ? activateEditMode : undefined}>Enter your status...</div>}</div>}
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;