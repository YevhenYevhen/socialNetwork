import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';





class HeaderContainer extends React.Component {

    componentDidMount() {

/*         authAPI.me()
        //axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            //withCredentials: true
        //}) 
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                this.props.setAuthUserData(id, email, login );
            }
        }) */
        //this.props.getAuthUserData();
    }

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