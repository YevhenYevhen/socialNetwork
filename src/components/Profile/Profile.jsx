import React from 'react';
import classes from './Profile.module.css';
//import classes from './MyPosts.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
  return (
    <div className={classes.content}> {/*-----this class as deleted because we added app-wrapper-content*/}
      <div>
        <img className={classes.mainPic} src='https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg' />
      </div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;