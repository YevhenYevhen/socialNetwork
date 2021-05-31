let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hey, how are you?', likesCounter: 12 },
      { id: 2, message: 'This is my first post!', likesCounter: 34 },
      { id: 3, message: '', likesCounter: 0 },
      { id: 4, message: '', likesCounter: 0 },
      { id: 5, message: '', likesCounter: 0 },
      { id: 6, message: '', likesCounter: 0 }
    ],
    friendsData: [
      { id: 1, name: 'Ross', img:'https://cdn4.vectorstock.com/i/1000x1000/84/68/hipster-man-in-glasses-avatar-profile-userpic-on-vector-8988468.jpg' },
      { id: 2, name: 'Rachel', img:'https://t3.ftcdn.net/jpg/04/10/08/16/360_F_410081697_B14LdyUz9N5v7dYYk7ttyC8P0PwOkDxm.jpg' },
      { id: 3, name: 'Monica', img:'https://image.shutterstock.com/image-vector/waitress-chef-glasses-apron-userpic-260nw-1956369484.jpg' }
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
    dialogsData: [
      { id: 1, name: 'Ross' },
      { id: 2, name: 'Rachel' },
      { id: 3, name: 'Chandler' },
      { id: 4, name: 'Monica' },
      { id: 5, name: 'Phoebe' },
      { id: 6, name: 'Joey' }
    ]
  }
};

export default state;

