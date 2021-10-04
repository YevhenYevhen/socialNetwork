import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'This is my first post!', likesCounter: 12 },
        { id: 2, message: 'This is crazy!', likesCounter: 34 },
        { id: 6, message: 'I am so excited', likesCounter: 0 }
      ],
      newPostData: '',
    },
    friends: {
      friendsData: [
      { id: 1, name: 'Ross', img: 'https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000003441959.jpg' },
      { id: 2, name: 'Rachel', img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxNDEzMTU5NzM3ODI5MzU4/rachel-haircut-gettyimages-138427199.jpg' },
      { id: 3, name: 'Monica', img: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/happy_birthday_courteney_cox_10_dialogues_of_monica_geller_that_friends_fan_can_never_get_enough_of.jpg' }
    ]
  },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log('state is changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;  
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
    }
  }


window.store = store;
export default store;

