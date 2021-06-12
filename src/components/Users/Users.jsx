import React from 'react';
import classes from './Users.module.css';
import userpic from '../../assets/images/user.png';

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
   return <div className={classes.usersBody}>
            <div className={classes.pages}>
           {pages.map(p => { return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && classes.selectedPage || classes.pages}>{p}</span>})}
            </div>
            {
                props.users.map(u => <div className={classes.usersWrapper} key={u.id}>
                    <div>
                        <img className={classes.userpic} src={u.photos.small != null ? u.photos.small : userpic} alt="" />
                        <div>
                            {u.followed
                                ? <button className={classes.follow} onClick={() => { props.follow(u.id) }}>Unfollow</button>
                                : <button className={classes.follow} onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                        </div>
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

export default Users;