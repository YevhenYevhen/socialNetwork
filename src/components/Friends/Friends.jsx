import classes from './Friends.module.css';
import Friend from './Friend/Friend';


const Friends = (props) => {
   
    return (
        <div className={classes.friendsWrapper}>
            <div className={classes.friendsTitle}>Friends</div>
            <div className={classes.friendsItemsWrapper}>
                <div className={classes.friendItem}>
                    <Friend state={props.state}/>
                </div>
            </div>
        </div>
    )
}

export default Friends;