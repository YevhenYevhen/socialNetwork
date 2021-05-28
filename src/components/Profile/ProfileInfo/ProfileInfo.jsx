import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
      </div>
      <div className={classes.description}>
        USERPIC + DESCRIPTION
      </div>
    </div>
  )
}

export default ProfileInfo;