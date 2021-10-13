import { useState } from 'react';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';



export const PostInput = (props) => {


  const [postId, setPostId] = useState(4)


  const onSubmit = (e) => {
    
    if (e.post) {
      props.addPost(e.post, postId);
    }
    setPostId(prevPostId => prevPostId + 1)
    e.post = '';
  }

  return <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="post"
          render={({ input, meta }) => (
            <div>
              <textarea className={classes.postTextarea} placeholder='Enter your post'  {...input} />
            </div>
          )}
        />
        <button className={classes.submitButton} type="submit">Post</button>
      </form>
    )}
  />
}


let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postData, postId) => {
      let action = addPostActionCreator(postData, postId);
      dispatch(action);
    },
  }
}

let PostInputContainer = connect(null, mapDispatchToProps)(PostInput);


export default PostInputContainer;
