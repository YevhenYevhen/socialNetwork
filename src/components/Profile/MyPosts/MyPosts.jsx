import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import PostInputContainer from './PostInput';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => <Post authUserPhoto={props.authUserPhoto} message={post.message} likes={post.likesCounter} />);
  let newPostData = props.newPostData;

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostData(text);

  }

  console.log(props);
  console.log('render');

  return (<div className={classes.postsBlock}>
    <div className={classes.postsHeader}>
      <h2>My posts</h2>
      <div>
        <PostInputContainer />
        {/* <textarea placeholder='Enter your post' value={newPostData} onChange={onPostChange} ref={newPostElement} name="" id="" cols="111" rows="5" /> */}
      </div>
    </div>
    <div>
      {/*  <button onClick={addPost} >Add post</button> */}
    </div>

    <div className={classes.posts}>
      {postsElements.reverse()}
    </div>
  </div>
  );
}

export default MyPosts;