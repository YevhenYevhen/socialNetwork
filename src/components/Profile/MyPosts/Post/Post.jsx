import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://www.byrdie.com/thmb/kAXw1ZXSfixyaiIjLt0tVfRzhhs=/843x1024/filters:fill(auto,1)/GettyImages-1035308964-5d15a77127854247b5c841d339a546c0.jpeg' alt="" />
        {props.message}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;