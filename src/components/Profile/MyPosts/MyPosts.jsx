import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {


  
  let postsElements = props.postsData.map((post) => <Post message={post.message} likes={post.likesCounter} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (<div className={classes.postsBlock}>
    <div>
      <h2>My posts</h2>
       <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost} >Add post</button>
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