import classes from './Friends.module.css';
import Friend from './Friend/Friend';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';



const Friends = (props) => {
   
    return (
        <div className={classes.friendsWrapper}>
            <div className={classes.friendsTitle}><NavLink to='/followedUsers'>Followed</NavLink></div>
            <div className={classes.friendsItemsWrapper}>
                <div className={classes.friendItem}>
                    <Friend followedUsers={props.followedUsers}/>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    followedUsers: state.usersPage.followedUsers
})

export default connect(mapStateToProps)(Friends);

