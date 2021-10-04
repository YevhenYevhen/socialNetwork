import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Pagination from '../../Common/Pagination/Pagination';
import { usersAPI } from '../../../Api/api';


let User = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

   return <div className={classes.usersBody}>
{/*             <div className={classes.pages}>
           {pages.map(p => { return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && classes.selectedPage || classes.pages}>{p}</span>})}
            </div> */}
       <Pagination currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}  />

            {
                users.map(u => <div className={classes.usersWrapper} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.userpic} src={u.photos.small != null ? u.photos.small : userpic} alt="" />
                        </NavLink>
                       
                      {  <div>
                            {u.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id == u.id)} className={classes.follow} onClick={() => {
/*                                     props.toggleIsFollowingInProgress(true, u.id);
                                    usersAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        props.toggleIsFollowingInProgress(false, u.id);
                                    }) */
/*====================================THE WAY IT WAS BEFORE THUNK=============================================*/
                                    props.unfollow(u.id);
                                }}>Unfollow</button>

                                : <button disabled={props.isFollowingInProgress.some(id => id == u.id)} className={classes.follow} onClick={() => {
/*                                     props.toggleIsFollowingInProgress(true, u.id);
                                    usersAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        props.toggleIsFollowingInProgress(false, u.id);
                                    })
                                     */
/*====================================THE WAY IT WAS BEFORE THUNK=============================================*/
                                    props.follow(u.id);
                                }}>Follow</button>}
                        </div>}
                    </div>
                    <div className={classes.borderWrapper}>
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
                )
            }
        </div >
}

export default User;