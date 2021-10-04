import classes from './Settings.module.css'
import ProfileDataForm from '../Profile/ProfileDataForm';
import { connect } from 'react-redux';
import { saveProfile, getUserProfile } from '../../redux/profileReducer'
import Preloader from '../Common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const Settings = (props) => {
    

   /*  useEffect(() => {
        props.getUserProfile(props.authUserId);
    }, [])
 */
  

    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={classes.wrapper}>
            <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile}  initialValue={props.profile}  />
        </div>
    )
}


const mapStateToProps = (state) => ({
    profile: state.auth.authUserProfile,
    authUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, { saveProfile, getUserProfile }),
    withAuthRedirect
)(Settings);

