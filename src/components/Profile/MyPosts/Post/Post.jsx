import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://pbs.twimg.com/profile_images/843126806844788738/WZGtr3GI_400x400.jpg" alt="" />
        {props.message}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;