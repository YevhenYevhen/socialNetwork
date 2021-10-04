import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import PostInputContainer from './PostInput';


const MyPosts = (props) => {

  let postsElements = props.postsData
    .map((post) => <Post key={post.id} authUserPhoto={props.authUserPhoto}
      message={post.message} likes={post.likesCounter} />);

  return (
    <>
      <div className={classes.postInputBlock}>
        <div className={classes.postsHeader}>
          <h2>My posts</h2>
        </div>
        <PostInputContainer />
      </div>
      <div className={classes.posts}>
        {postsElements.reverse()}
      </div>
    </>
  );
}

export default MyPosts;