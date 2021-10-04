import { useState } from 'react';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { sendMessageActionCreator } from '../../redux/dialogsReducer';
import classes from './Dialogs.module.css';


export const DialogsForm = (props) => {
  const [messageId, setMessageId] = useState(36)
  
  const onSubmit = (e) => {
    if (e.message) {
      props.sendMessage(e.message, messageId);
      e.message = '';
      setMessageId(prevMessageId => prevMessageId + 1)
    }
  }


 

  return <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form className={classes.form} onSubmit={handleSubmit}>
        <Field
          name="message"
          render={({ input, meta }) => (
            <textarea className={classes.messageTextarea} placeholder='Enter your message' {...input} />
          )}
        />
        <button className={classes.sendButton} type="submit">Send</button>
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
    sendMessage: (text, messageId) => {
      let action = sendMessageActionCreator(text, messageId);
      dispatch(action);
    },
  }
}



let DialogsFormContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsForm);


export default DialogsFormContainer;
