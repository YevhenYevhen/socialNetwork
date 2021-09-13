import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import userPic from './../../assets/images/user.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../Common/Preloader';
const Header = (props) => {

    
 
    
    return (<header className={classes.header}>
        <div className={classes.logoBox}>
            <img className={classes.logo} src={logo} />
            <div className={classes.title}>Social Network</div>
        </div>

        <div >
            {props.isAuth ? <div className={classes.loginBlock}><img className={classes.userIcon} src={props.authUserPhoto}>
            </img> <div>{props.login}</div> <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    );
}

export default Header;