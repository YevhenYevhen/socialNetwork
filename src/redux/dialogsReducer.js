
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA';

let initialState = {
    messagesData: [
        { id: 1, text: 'Hey!' },
        { id: 2, text: 'Call me!' },
        { id: 3, text: 'what???' },
        { id: 4, text: 'where are you?' },
        { id: 5, text: 'hi there' },
        { id: 6, text: 'how you doin?' }
      ],
      newMessageData: '',
      dialogsData: [
        { id: 1, name: 'Ross' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Chandler' },
        { id: 4, name: 'Monica' },
        { id: 5, name: 'Phoebe' },
        { id: 6, name: 'Joey' }
      ]
}

const dialogsReducer = (state = initialState, action) => {

    
    
    
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 7,
                text: state.newMessageData,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, text: state.newMessageData }],
                newMessageData: ''
            };
            // stateCopy.messagesData = [...state.messagesData];
            // stateCopy.messagesData.push(newMessage);
            // return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_DATA: {
            return {
                ...state,
                newMessageData: action.currentMessage
            };
            //return stateCopy;
        }
        default:
            return state;

    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const onMessageChangeActionCreator = (messageText) => ({
  type: UPDATE_NEW_MESSAGE_DATA,
  currentMessage: messageText
})
export default dialogsReducer;