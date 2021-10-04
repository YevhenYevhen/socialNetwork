import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userpic from '../../assets/images/user.png';

/* props.setUsers([
    { id: 1, userpicUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png', followed: false, userName: 'Eugene', status: 'I am a flipping developer', location: { city: 'Warsaw', country: 'Poland' } },
    { id: 2, userpicUrl: 'https://paisano-online.com/wp-content/uploads/2020/02/File_001-900x733.jpg', followed: true, userName: 'Max', status: 'I am a designer', location: { city: 'Warsaw', country: 'Poland' } },
    { id: 3, userpicUrl: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/03/Squidward.jpg', followed: true, userName: 'Anastasia', status: 'Hey there', location: { city: 'St.Petersburg', country: 'Russia' } },
    { id: 4, userpicUrl: 'https://i.pinimg.com/originals/96/35/3a/96353ab74728debcc56dc9362805d405.jpg', followed: false, userName: 'Ross', status: 'We were on a break', location: { city: 'New York', country: 'Usa' } },
] */
//OLD USERS DATABASE


let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={getUsers}>Get users</button>
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
            </div>)
        }
    </div>
}

export default Users;