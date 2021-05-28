import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'Hey, how are you?', likesCounter: 12 },
    { id: 2, message: 'This is my first post!', likesCounter: 34 },
    { id: 3, message: '', likesCounter: 0 },
    { id: 4, message: '', likesCounter: 0 },
    { id: 5, message: '', likesCounter: 0 },
    { id: 6, message: '', likesCounter: 0 }
]
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
      <Post message={postsData[0].message} likes={postsData[0].likesCounter} />
      <Post message={postsData[1].message} likes={postsData[1].likesCounter} />
      <Post message={postsData[2].message} likes={postsData[2].likesCounter} />
    </div>
  </div>
  );
}

export default MyPosts;