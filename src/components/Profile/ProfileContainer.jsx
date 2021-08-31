import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus, saveNewMainPic, saveProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../Api/api';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshComponent() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 17754;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshComponent();
   /*  let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 17700;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId); */
   /*  usersAPI.getProfile(userId)
  //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      }) */
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshComponent();
      
    }
 

  }
  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        saveProfile={this.props.saveProfile}
        updateStatus={this.props.updateStatus}
        saveNewMainPic={this.props.saveNewMainPic}
      />
    )
  }
}







let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})
/* 
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let withUrlContainer = withRouter(AuthRedirectComponent);



export default connect (mapStateToProps, {getUserProfile})(withUrlContainer); */

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, saveNewMainPic, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);



