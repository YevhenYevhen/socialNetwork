import React from 'react';
import classes from './Post.module.css';
import likeIcon from '../../../../assets/icons/like.png'
import userPic from '../../../../assets/images/user.png'


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img className={classes.userPhoto} src={props.authUserPhoto || userPic} alt="" />
      <div className={classes.message}>{props.message}</div>
      <div>
        <button className={classes.likeButton}>
          <img className={classes.likeIcon} src={likeIcon} alt="" />
          <span>{props.likes}</span>
        </button>
      </div>
    </div>
  )
}

export default Post;