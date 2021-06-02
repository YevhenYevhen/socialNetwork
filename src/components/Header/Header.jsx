import React from 'react';
import classes from './Header.module.css';
const Header = () => {
    return (<header className={classes.header}>
        <img src="https://symbolikon.com/wp-content/uploads/edd/2019/09/Alchemy-water-bold-400w.png" />
            <span className={classes.triangle}>Triangle</span> 
    </header>
    );
}

export default Header;