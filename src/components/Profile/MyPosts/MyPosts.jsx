import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import PostInputContainer from './PostInput';


const MyPosts = (props) => {

  let postsElements = props.postsData.slice().reverse()
    .map((post) => <Post key={post.id} authUserPhoto={props.authUserPhoto}
      message={post.message} isLiked={post.isLiked} likeDislikePost={props.likeDislikePost} postId={post.id} />);

  return (
    <>
      <div className={classes.postInputBlock}>
        <div className={classes.postsHeader}>
          <h2>My posts</h2>
        </div>
        <PostInputContainer />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </>
  );
}

export default MyPosts;