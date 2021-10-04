import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ currentPage, totalUsersCount, pageSize, onPageChanged, user, ...props }) => {
    let u = user;
    return <div className={classes.borderWrapper}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.userpic} src={u.photos.small != null ? u.photos.small : userpic} alt="" />
                        </NavLink>
                       
                      {  <div>
                            {u.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id == u.id)} className={classes.follow} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>

                                : <button disabled={props.isFollowingInProgress.some(id => id == u.id)} className={classes.follow} onClick={() => {

                                    props.follow(u.id);
                                }}>Follow</button>}
                        </div>}
                    <div>
                        <div>
                            <div className={classes.userName}>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={classes.locationInfo}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
               </div>
}

export default User;