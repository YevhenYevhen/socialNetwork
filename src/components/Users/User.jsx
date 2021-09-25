import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Preloader from "../Common/Preloader";



const User = (props) => {
    return <>
        <div className={classes.container}>
            {props.users.map((user, index) => {
                let following = props.isFollowingInProgress.some(id => id == user.id);
                let refElement = props.users.length === index + 1;
                let trimmedStatus;
                let trimmedName;
                
                if (user.status) {
                    if (user.status.length > 13) {
                        trimmedStatus = user.status.slice(0, 14) + '...';
                    }
                }
                if (user.name.length > 13) {
                    trimmedName =  user.name.slice(0, 14) + '...';
                }
                return <div className={classes.user} ref={refElement ? props.lastUserElementRef : undefined} key={user.name}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classes.photo} src={user.photos.large || userpic}></img>
                    </NavLink>
                    <div className={classes.name}>{trimmedName || user.name}</div>
                    <div className={classes.status}>{trimmedStatus || user.status}</div>
                    <div>
                        {user.followed
                            ? <button disabled={following}
                                className={following ? classes.disabledButton : classes.button}
                                onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>

                            : <button disabled={following}
                                className={following ? classes.disabledButton : classes.button}
                                onClick={() => {
                                    props.follow(user.id);
                                }}>Follow</button>}
                    </div>
                </div>
            })}
        </div>
        {props.isFetching && <Preloader />}
    </>
}
export default User;









