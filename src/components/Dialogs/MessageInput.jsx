import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { sendMessageActionCreator } from '../../redux/dialogsReducer';

export const MessageInput = (props) => {
    
    const onSubmit = (e) => {
        props.sendMessage(e.message);
    }
    const validate = (e) => {
        const errors = {};
        if (e.message && e.message.length === 0) {
            errors.message = 'Enter a valid email';
        }
        return errors;
    }
     
  return <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="message"
          render={({ input, meta }) => (
            <div>
              {/* <label>Enter your message</label> */}
              <textarea placeholder='Enter your message' {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        <button type="submit">Send message</button>
      </form>
    )}
  />
}


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage 
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: (text) => {
        let action = sendMessageActionCreator(text);
        dispatch(action);
      },
    }
  }
  
  
  
  let MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput); 
  
  
export default MessageInputContainer;
