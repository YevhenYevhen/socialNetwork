import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';





class HeaderContainer extends React.Component {
    render() {
        if (this.props.isAuth) {
            return <Header {...this.props} />
        } else return null;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authUserId: state.auth.userId,
    authUserPhoto: state.auth.authUserPhoto,
    profile: state.profilePage.profile
});

export default connect (mapStateToProps, {logout}) (HeaderContainer);