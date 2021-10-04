
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
    messagesData: [
        { id: 1, text: 'Hey!' },
        { id: 2, text: 'Call me!' },
        { id: 3, text: 'what???' },
        { id: 4, text: 'where are you?' },
        { id: 5, text: 'hi there' },
        { id: 6, text: 'how you doin?' },
        { id: 7, text: 'Hey!' },
        { id: 8, text: 'Call me!' },
        { id: 9, text: 'what???' },
        { id: 10, text: 'where are you?' },
        { id: 11, text: 'hi there' },
        { id: 12, text: 'how you doin?' },
        { id: 13, text: 'Hey!' },
        { id: 14, text: 'Call me!' },
        { id: 15, text: 'what???' },
        { id: 16, text: 'where are you?' },
        { id: 17, text: 'hi there' },
        { id: 18, text: 'how you doin?' },
        { id: 19, text: 'Hey!' },
        { id: 20, text: 'Call me!' },
        { id: 21, text: 'what???' },
        { id: 22, text: 'where are you?' },
        { id: 23, text: 'hi there' },
        { id: 24, text: 'how you doin?' },
        { id: 25, text: 'Call me!' },
        { id: 26, text: 'what???' },
        { id: 27, text: 'where are you?' },
        { id: 28, text: 'hi there' },
        { id: 29, text: 'how you doin?' },
        { id: 30, text: 'Call me!' },
        { id: 31, text: 'what???' },
        { id: 32, text: 'where are you?' },
        { id: 33, text: 'hi there' },
        { id: 34, text: 'how you doin?' },
        { id: 35, text: 'Call me!' },
      ],
      dialogsData: [
        { id: 1, name: 'Ross', photo: 'https://fwcdn.pl/cpo/05/66/566/862.4.jpg' },
        { id: 2, name: 'Rachel', photo: 'https://wallpaperaccess.com/full/2462698.png' },
        { id: 3, name: 'Phoebe', photo: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg' },
        { id: 4, name: 'Chandler', photo: 'https://pbs.twimg.com/profile_images/1257292276209979392/ELX3_1oY.jpg' },
        { id: 5, name: 'Joey', photo: 'https://i.guim.co.uk/img/media/513976d50736695ee8bd5014175e007f9980531f/0_289_2980_1788/master/2980.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=77863ec7b2622437668af3ff9ecd7ae6' },
        { id: 6, name: 'Monica', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QTRdOptHbRhCV6oc4s1c41waSaX354lkVg&usqp=CAU' }
    
      ]
}



const dialogsReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: action.messageId,
                text: action.newMessageData,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, {...newMessage}],
            };
        }
        default:
            return state;

    }
}

export const sendMessageActionCreator = (messageText, messageId) => ({ type: SEND_MESSAGE, newMessageData: messageText, messageId })

export default dialogsReducer;