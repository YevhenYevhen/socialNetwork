import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";



let state = {
    postsData: [
        { id: 1, message: 'This is my first post!', likesCounter: 12 },
        { id: 2, message: 'This is crazy!', likesCounter: 34 },
        { id: 6, message: 'I am so excited', likesCounter: 0 }
    ]
}

test('length of postsData should be incremented', () => {
    let action = addPostActionCreator('Hello there!')
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(4);
  });
  
  test('new post should be correct', () => {
    let action = addPostActionCreator('Hello there!')
    let newState = profileReducer(state, action)
    expect(newState.postsData[3].message).toBe('Hello there!');
  });
  
  test('after deleting postsData should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
   expect(newState.postsData.length).toBe(2);
  });
  
  