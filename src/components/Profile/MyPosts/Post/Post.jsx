import React from 'react';
import classes from './Post.module.css';
import likeIcon from '../../../../assets/icons/like.png'
import binIcon from '../../../../assets/icons/bin.png'
import userPic from '../../../../assets/images/user.png'


const Post = ({ authUserPhoto, message, postId, isLiked, likeDislikePost, deletePost }) => {
  return (
    <div className={classes.wrapper}>
      <div onClick={() => deletePost(postId)}
        className={classes.deleteButtonContainer}>
        <img className={classes.binIcon} src={binIcon} alt="" />
      </div>
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