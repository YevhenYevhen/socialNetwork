import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';


export const PostInput = (props) => {
    
    const onSubmit = (e) => {
        props.addPost(e.post);
    }
    const validate = (e) => {
        const errors = {};
        if (e.post && e.post === 0) {
            errors.post = 'Enter a valid email';
        }
        return errors;
    }
     
  return <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="post"
          render={({ input, meta }) => (
            <div>
              {/* <label>Enter your message</label> */}
              <textarea placeholder='Enter your post' {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        <button type="submit">Post</button>
      </form>
    )}
  />
}


let mapStateToProps = (state) => {
    return {
  
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      addPost: (postData) => {
        let action = addPostActionCreator(postData);
        dispatch(action);
      },
    }
  }
  
  
  
  let PostInputContainer = connect(mapStateToProps, mapDispatchToProps)(PostInput); 
  
  
export default PostInputContainer;
