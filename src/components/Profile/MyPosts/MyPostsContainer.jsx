
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    authUserPhoto: state.auth.authUserPhoto
  }
}

let MyPostsContainer = connect(mapStateToProps, null)(MyPosts); 


export default MyPostsContainer;