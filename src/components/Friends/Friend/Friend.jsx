import classes from './../Friends.module.css';
import userPic from '../../../assets/images/user.png'
import Preloader from '../../Common/Preloader';



const Friend = ({ followedUsers }) => {
    
    if (!followedUsers) {
        return <Preloader/>
    }
    let reducedFollowedUsers = followedUsers.filter(u => followedUsers.indexOf(u) < 3);
    console.log(reducedFollowedUsers);
    return ( <div>'hello'</div>
/*             <div className={classes.friendItems}>
            {reducedFollowedUsers.map(u => <div key={u.name} className={classes.friendItem} ><div>{u.name}</div>
                    <img src={u.photos.small || userPic}></img></div>
            )}
            </div> */
    )
}



export default Friend;

