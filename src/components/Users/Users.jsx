import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Pagination from '../Common/Pagination/Pagination';
import { usersAPI } from '../../Api/api';
import User from './User';
import { unfollow } from '../../redux/usersReducer';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, isFollowingInProgress, ...props }) => {

   return <div>
       <Pagination currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}  />
       <div className={classes.borderWrapper}>
       {users.map(u => <div><User user={u} key={u.id}
           followingInProgress={props.followingInProgress}
           follow={props.follow}
           unfollow={props.unfollow}
           isFollowingInProgress={isFollowingInProgress}
           totalUsersCount={props.totalUsersCount}
       /></div>)}
           </div>
       </div>
}

export default Users;