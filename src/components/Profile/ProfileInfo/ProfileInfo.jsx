import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';
import userPic from './../../../assets/images/user.png'
import { useEffect, useRef } from 'react';
import locationIcon from './../../../assets/icons/location.png'

const ProfileInfo = (props) => {
  const node = useRef()
  let [updatePictureMode, setUpdatePictureMode] = useState(false);

  useEffect(() => {
    if (updatePictureMode && props.isOwner) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updatePictureMode, props.isOwner]);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setUpdatePictureMode(false);
  };


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
    if (props.isOwner) {
      setUpdatePictureMode(true);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={props.isOwner ? classes.ownerMainPhotoContainer : classes.mainPhotoContainer}>
        <img onClick={onPictureClick} className={classes.mainPhoto}
          src={props.profile.photos.large || userPic} alt='' />

        {props.isOwner && updatePictureMode &&
          <div className={classes.uploadPhotoLabelContainer}>
            <label ref={node} id={classes.uploadPhotoLabel} for={classes.uploadPhoto}>Upload profile photo</label>
            <input type="file" name='photo' id={classes.uploadPhoto}
              onChange={onMainPicSelected} >
            </input>
          </div>
        }
      </div>
      <div className={classes.nameAndStatus}>
        <div className={classes.fullName}>
          {props.profile.fullName}
        </div>
        <div className={classes.statusContainer}>
          <ProfileStatusWithHooks status={props.status}
            updateStatus={props.updateStatus} isOwner={props.isOwner} />
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.location}>
          <div>
            <img className={classes.locationIcon} src={locationIcon} alt="" />
            <span>Warsaw</span>
          </div>
        </div>
        <div className={classes.aboutMe}>
          <div>About</div>
          {props.profile.aboutMe}
        </div>
        <ProfileData profile={props.profile} isOwner={props.isOwner} />
      </div>
    </div>
  )
}




const Contact = ({ contactsTitle, contactsValue }) => {

  switch (contactsTitle) {
    case ('facebook'):
      return <a href={contactsValue}><img
        className={classes.icon}
        src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png' alt='' /></a>
    case ('github'):
      return <a href={contactsValue}><img
        className={classes.icon}
        src='https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png' alt='' /></a>
    case ('instagram'):
      return <a href={contactsValue} ><img
        className={classes.icon}
        src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png" alt="" /></a>
    case ('twitter'):
      return <a href={contactsValue} ><img
        className={classes.icon}
        src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-128.png" alt="" /></a>
    case ('youtube'):
      return <a href={contactsValue} ><img
        className={classes.icon}
        src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-128.png" alt="" /></a>
    default: return;

  }
}


const ProfileData = ({ profile }) => {

  return <div className={classes.contactsContainer}>
    {Object.keys(profile.contacts).filter(key => key !== 'mainLink' && key !== 'vk' && key !== 'website')
      .map(key => {
        if (profile.contacts[key]) {
          return <div key={key} className={classes.iconContainer}>
            <Contact contactsTitle={key} contactsValue={profile.contacts[key]} />
          </div>
        } else return null;
      })}
  </div>
}

export default ProfileInfo;