import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.userPic} src="https://www.byrdie.com/thmb/kAXw1ZXSfixyaiIjLt0tVfRzhhs=/843x1024/filters:fill(auto,1)/GettyImages-1035308964-5d15a77127854247b5c841d339a546c0.jpeg" />
      </div>
      <div className={classes.description}>
        Justin Star
      </div>
    </div>
  )
}

export default ProfileInfo;