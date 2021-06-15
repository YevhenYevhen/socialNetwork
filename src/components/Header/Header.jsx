import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (<header className={classes.header}>
        <img src="https://symbolikon.com/wp-content/uploads/edd/2019/09/Alchemy-water-bold-400w.png" />
        <span className={classes.triangle}>Triangle</span>
        
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
    );
}

export default Header;