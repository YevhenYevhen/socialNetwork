import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';



export const PostInput = (props) => {
  
  const onSubmit = (e) => {
    if (e.post) {
      props.addPost(e.post);
    }
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
    addPost: (postData) => {
      let action = addPostActionCreator(postData);
      dispatch(action);
    },
  }
}



let PostInputContainer = connect(null, mapDispatchToProps)(PostInput);


export default PostInputContainer;
