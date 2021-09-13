import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Preloader from "../Common/Preloader";


const User = (props) => {
    
return  <>
        <div className={classes.container}>
            {props.users.map((user, index) => {
                if (props.users.length === index + 1) {
                    return <div  className={classes.user} ref={props.lastUserElementRef} key={user.name}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={classes.photo} src={user.photos.large || userpic}></img>
                        </NavLink> <div className={classes.name}>{user.name}</div>
                        <div className={classes.status}>{user.status}</div>
                        <div>
                            {user.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id == user.id)} className={classes.button} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>

                                : <button disabled={props.isFollowingInProgress.some(id => id == user.id)} className={classes.button} onClick={() => {

                                    props.follow(user.id);
                                }}>Follow</button>}
                        </div>
                    </div>
                } else {
                    return <div className={classes.user} key={user.name}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={classes.photo} src={user.photos.large || userpic}></img>
                        </NavLink> <div className={classes.name}>{user.name}</div>
                        <div className={classes.status}>{user.status}</div>
                        <div>
                            {user.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id == user.id)} className={classes.button} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>

                                : <button disabled={props.isFollowingInProgress.some(id => id == user.id)} className={classes.button} onClick={() => {

                                    props.follow(user.id);
                                }}>Follow</button>}
                        </div>
                    </div>
            
                }
            })}
     
        </div>
        <div> {props.isFetching && <Preloader />}</div>
    </>
}
export default User;





 






    