import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {
  
  let postsElements = props.postsData.map((post) => <Post message={post.message} likes={post.likesCounter} />);

  return (<div className={classes.postsBlock}>
    <div>
      <h2>My posts</h2>
       <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </div>
    <div className={classes.posts}>
      { postsElements }
    </div>
  </div>
  );
}

export default MyPosts;