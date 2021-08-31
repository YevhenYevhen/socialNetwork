import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
//import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';




/* const MyPostsContainer = (props) => {
  //let state = props.store.getState();
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = onPostChangeActionCreator(text);
          store.dispatch(action);
        }
        return <MyPosts updateNewPostData={onPostChange}
          addPost={addPost}
          postsData={state.profilePage.postsData}
          newPostData={state.profilePage.newPostData} />
      }
    }
    </StoreContext.Consumer>
  );
}
 */

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
/*     newPostData: state.profilePage.newPostData */
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
/*     updateNewPostData: (text) => {
      let action = onPostChangeActionCreator(text);
      dispatch(action);
    }, */
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}



let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 


export default MyPostsContainer;