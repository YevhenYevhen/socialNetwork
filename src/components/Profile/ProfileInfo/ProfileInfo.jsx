import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';
import userPic from './../../../assets/images/user.png'
import { useEffect } from 'react';
import ProfileDataForm from '../ProfileDataForm';
import updateIcon from './../../../assets/images/update-icon.png';
import { span } from 'prelude-ls';
import { NavLink } from 'react-router-dom';

const ProfileInfo = (props) => {


  let [editMode, setEditMode] = useState(false);
  let [updatePictureMode, setUpdatePictureMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPicSelected = (e) => {
    if (e.target.files.length) {
      props.saveNewMainPic(e.target.files[0])
    }
    setUpdatePictureMode(false);
  }

  const onPictureClick = (e) => {
    setUpdatePictureMode(true);
  }



  return (
    <div className={classes.wrapper}>
      <img onClick={onPictureClick} className={props.isOwner ? classes.ownerUserPic : classes.userPic} src={props.profile.photos.large || userPic} />
      {props.isOwner && updatePictureMode && <div><input className={classes.updateUserPicButton} type="file"
        onChange={onMainPicSelected} ></input></div>}
      <div className={classes.nameAndStatus}>
        <div className={classes.fullName}>
          {props.profile.fullName}
        </div>
        <div className={classes.status}>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>

      <div className={classes.aboutMe}>
      {props.profile.aboutMe}
    </div>
      {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} saveProfile={props.saveProfile} deactivateEditMode={() => { setEditMode(false) }} /> :
        <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => { setEditMode(true) }} />}
    </div>
  )
}




const Contact = ({ contactsTitle, contactsValue }) => {

  let [hoverMode, setHoverMode] = useState(false)

  const toggleHoverMode = (toggle) => {
    setHoverMode(toggle);
  }
    switch (contactsTitle) {
      case ('facebook'):
        return <a href={contactsValue}><img onMouseEnter={() => toggleHoverMode(true)}
          onMouseLeave={() => toggleHoverMode(false)}
          className={hoverMode ? classes.iconsHover : classes.icons}
          src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png' /></a>
      case ('github'):
        return <a href={contactsValue} onMouseEnter={() => toggleHoverMode(true)}
          onMouseLeave={() => toggleHoverMode(false)}><img
          className={hoverMode ? classes.iconsHover : classes.icons}
            src='https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png' /></a>
      case ('instagram'):
        return <a href={contactsValue} onMouseEnter={() => toggleHoverMode(true)}
          onMouseLeave={() => toggleHoverMode(false)}><img
          className={hoverMode ? classes.iconsHover : classes.icons}
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" /></a>
      case ('twitter'):
        return <a href={contactsValue} onMouseEnter={() => toggleHoverMode(true)}
          onMouseLeave={() => toggleHoverMode(false)}><img
          className={hoverMode ? classes.iconsHover : classes.icons}
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" /></a>
      case ('youtube'):
        return <a href={contactsValue} onMouseEnter={() => toggleHoverMode(true)}
          onMouseLeave={() => toggleHoverMode(false)}><img
          className={hoverMode ? classes.iconsHover : classes.icons}
            src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" alt="" /></a>

       
    }
}








const ProfileData = ({ profile, isOwner, activateEditMode }) => {

  return <>
      <div className={classes.contacts}>{Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk' && key !== 'website')
      .map(key => {
          if(profile.contacts[key]){
        return  <Contact key={key} contactsTitle={key} contactsValue={profile.contacts[key]} /> 
        }
      })}
      {isOwner && <div><button onClick={activateEditMode}>Edit</button></div>}
    </div>
        
    </>
}




export default ProfileInfo;