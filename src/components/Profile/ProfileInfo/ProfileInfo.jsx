import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';
import userPic from './../../../assets/images/user.png'
import { useEffect } from 'react';
import ProfileDataForm from '../ProfileDataForm';
import updateIcon from './../../../assets/images/update-icon.png';
import { span } from 'prelude-ls';

const ProfileInfo = (props) => {


  let [editMode, setEditMode] = useState(false);
  //let [updatePictureMode, setUpdatePictureMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPicSelected = (e) => {
    if (e.target.files.length) {
      props.saveNewMainPic(e.target.files[0])
    }
  }

/*   const onMouseDownCapture = (e) => {
    setUpdatePictureMode(true);
  }
  const onMouseLeave = (e) => {
    setUpdatePictureMode(false);
  } */
  return (
    <div className={classes.profileInfoWrapper}>
      <div className={classes.pictureNameStatus}>
       {/*  <div onMouseLeave={onMouseLeave} onMouseDownCapture={onMouseDownCapture}>  */}
        <img className={classes.userPic} src={props.profile.photos.large || userPic} />
          {props.isOwner && <div><input className={classes.updateUserPicButton} type="file"
            onChange={onMainPicSelected}></input></div>}
        {/* </div> */}
        <div className={classes.fullName}>
          {props.profile.fullName}
        </div>
        <div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
      {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} saveProfile={props.saveProfile} deactivateEditMode={() => {setEditMode(false)}} /> :
        <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => {setEditMode(true)}}  />}
    </div>
  )
}


const Contact = ({ contactsTitle, contactsValue }) => {
  return <div><b>{contactsTitle}</b>:{contactsValue}</div>;
}

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={activateEditMode}>Edit</button></div>}
    <div className={classes.aboutMe}>
    {profile.aboutMe}
  </div>
    <div className='contacts'>
      <div>Contacts:{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
      })}</div>
    </div>
  </div>
}




export default ProfileInfo;