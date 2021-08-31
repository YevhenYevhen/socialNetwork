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
                {editMode && <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} ></input>}
            </div>
            <div>
                {!editMode && <div>{<span onClick={activateEditMode} >{status}</span> || <span onClick={activateEditMode}>Enter your status...</span>}</div>}
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;