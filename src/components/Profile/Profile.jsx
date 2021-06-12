import React from 'react';
import classes from './Profile.module.css';
//import classes from './MyPosts.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div className={classes.content}> {/*-----this class as deleted because we added app-wrapper-content*/}
      <div>
        <img className={classes.mainPic} src='https://www.artmajeur.com/medias/hd/n/o/nottrott/artwork/10805254_large-abstract-painting-958.jpg' />
      </div>
      <ProfileInfo />
      <MyPostsContainer /* store={props.store}  *//>
    </div>
  );
}

export default Profile;