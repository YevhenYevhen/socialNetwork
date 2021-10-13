
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { likeDislikePost } from '../../../redux/profileReducer';


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    authUserPhoto: state.auth.authUserPhoto
  }
}

let MyPostsContainer = connect(mapStateToProps, { likeDislikePost })(MyPosts);


export default MyPostsContainer;