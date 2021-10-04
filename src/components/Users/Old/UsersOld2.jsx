import React from 'react';
import classes from './Users.module.css';
import Pagination from '../../Common/Pagination/Pagination';
import User from '../User';


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