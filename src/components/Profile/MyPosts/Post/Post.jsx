import React from 'react';
import classes from './Post.module.css';
import likeIcon from '../../../../assets/icons/like.png'
import userPic from '../../../../assets/images/user.png'


const Post = ({authUserPhoto, message, postId, isLiked, likeDislikePost}) => {
  return (
    <div className={classes.item}>
      <img className={classes.userPhoto} src={authUserPhoto || userPic} alt="" />
      <div className={classes.message}>{message}</div>
      <div>
        <button onClick={() => likeDislikePost(postId)}
          className={isLiked ? classes.dislikeButton : classes.likeButton}>
           <span>{isLiked ? 'Dislike' : 'Like'}</span>
          <img className={isLiked ? classes.dislikeIcon : classes.likeIcon} src={likeIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Post;