import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';



const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profileInfoWrapper}>
      <div className={classes.pictureNameStatus}>
        <img className={classes.userPic} src={props.profile.photos.large} />
        <div className={classes.fullName}>
          {props.profile.fullName}
        </div>
        <div className={classes.aboutMe}>
          {props.profile.aboutMe}
        </div>
      </div>
      <div className={classes.contacts}>
        <div className={classes.social}>
          <div> {props.profile.contacts.facebook && 'Facebook:'} </div>
          <div>{props.profile.contacts.website && 'Website:'}</div>
          <div>{props.profile.contacts.vk && 'VK:' } </div>
          <div>{props.profile.contacts.twitter && 'Twitter:'}</div>
          <div>{props.profile.contacts.instagram && 'Instagram: '}</div>
          <div>{props.profile.contacts.youtube && 'Youtube:'} </div>
          <div>{props.profile.contacts.github && 'GitHub: '}</div>
        </div>
        <div className={classes.links}>
          <div> {props.profile.contacts.facebook || null}</div>
          <div> {props.profile.contacts.website || null}</div>
          <div> {props.profile.contacts.vk || null}</div>
          <div> {props.profile.contacts.twitter || null}</div>
          <div>{props.profile.contacts.instagram || null}</div>
          <div> {props.profile.contacts.youtube || null}</div>
          <div>{props.profile.contacts.github || null}</div>
          <div>{props.profile.contacts.null}</div>
        </div>
      </div>
    </div>




    /*     <div className={classes.profileInfoWrapper}>
          <div className={classes.userPicAndName}>
            <img className={classes.userPic} src={props.profile.photos.large} />
            <div className={classes.fullName}>
              {props.profile.fullName}
              <div className={classes.aboutMe}>
                {props.profile.aboutMe}
              </div>
            </div>
          </div>
          <div className={classes.contacts}>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.null}</div>
          </div>
          <div className={classes.job}>{props.profile.lookingForAJob ? 'I am looking for a job' : null} <div>{props.profile.lookingForAJobDescription}</div></div>
        </div>*/
  )
}

export default ProfileInfo;