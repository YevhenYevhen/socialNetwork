import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import messageIcon from '../../assets/icons/message.png'
import profileIcon from '../../assets/icons/profile.png'
import newsIcon from '../../assets/icons/news.png'
import settingsIcon from '../../assets/icons/settings.png'
import usersIcon from '../../assets/icons/users.png'
import { useWindowWidth } from '../Common/useWindowWidth';

const Navbar = (props) => {

    const windowWidth = useWindowWidth();
    
    if (windowWidth < 1130) {
        return null;
    }
   
        return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <img className={classes.icon} src={profileIcon} alt="" />
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <img className={classes.icon} src={messageIcon} alt="" />
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <img className={classes.icon} src={newsIcon} alt="" />
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                     <img className={classes.icon} src={settingsIcon} alt="" />
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                     <img className={classes.icon} src={usersIcon} alt="" />
                    <NavLink to='/users' activeClassName={classes.activeLink}>Find users</NavLink>
                </div>
            </nav>
        );
    }
    


export default Navbar;

