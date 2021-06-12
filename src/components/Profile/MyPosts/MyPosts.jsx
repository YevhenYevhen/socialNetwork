import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => <Post message={post.message} likes={post.likesCounter} />);
  let newPostData = props.newPostData;

  let newPostElement = React.createRef();
  let addPost = () => {
   props.addPost(); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostData(text);
    
}

  return (<div className={classes.postsBlock}>
    <div>
      <h2>My posts</h2>
       <div>
        <div>
          <textarea placeholder='Enter your post' value={newPostData} onChange={onPostChange} ref={newPostElement} name="" id="" cols="111" rows="5" />
        </div>
        <div>
          <button onClick={addPost} >Add post</button>
        </div>
      </div>
    </div>
    <div className={classes.posts}>
      { postsElements.reverse() }
    </div>
  </div>
  );
}

export default MyPosts;