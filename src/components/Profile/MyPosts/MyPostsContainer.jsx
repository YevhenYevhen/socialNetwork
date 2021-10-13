
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { likeDislikePost, deletePost } from '../../../redux/profileReducer';


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    authUserPhoto: state.auth.authUserPhoto
  }
}

let MyPostsContainer = connect(mapStateToProps, { likeDislikePost, deletePost })(MyPosts);


export default MyPostsContainer;