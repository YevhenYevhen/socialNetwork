import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Friends from './Friends/Friends';
import logoIcon from '../../assets/icons/logo.png'


const Profile = (props) => {
  
  return (
    <div className={classes.content}> 
      <div className={classes.banner}>
        <img className={classes.logoIcon} src={logoIcon} alt='' />
      </div>
      <div className={classes.infoAndFriends}>
      <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner}
        profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} saveNewMainPic={props.saveNewMainPic} />
      <Friends />
      </div>
      <MyPostsContainer/>
      
    </div>
  );
}

export default Profile;