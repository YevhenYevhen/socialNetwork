import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import userPic from './../../assets/images/user.png'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Preloader from '../Common/Preloader';
import { ReactComponent as Caret } from '../../assets/icons/caret.svg';
import logoIcon from '../../assets/icons/logo.png'
/* const Header = (props) => {

    const [goingToLogout, setGoingToLogout] = useState(false)



    
    return <header className={classes.header}>
        <div className={classes.logoBox}>
            <img className={classes.logo} src={logo} />
            <div className={classes.title}>Social Network</div>
        </div>

        <div>
            {props.isAuth ? <>

                <div className={classes.loginBlock}>
                    {goingToLogout ? <>
                        <div>
                           
                            <button onClick={props.logout}>Log out</button>
                            
                        </div>

                    </> :
                        <><img className={classes.userIcon} src={props.authUserPhoto} />
                            <span className={classes.login}>{props.login}</span> 
                        <span onClick={() => setGoingToLogout(true)} id={classes.triangle}>&#9662;</span>
                        </>
                    }
                </div>

            </>
                : <NavLink to={'/login'}><button>Login</button></NavLink>}
        </div>
    </header>
    ;
}

export default Header;

 */


const Header = (props) => {
    const [open, setOpen] = useState(false)
    const node = useRef()

    const handleClickOutside = e => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setOpen(false);
    };
    
    useEffect(() => {
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

    const Navbar = (props) => {
        
        return (
            <nav className={classes.navbar}>
                <div className={classes.title}><img className={classes.logoIcon} src={logoIcon} alt="" />Social Network</div>
                <ul className={classes.nav}>
                    <div className={classes.login}>{props.login}</div>
                    <div className={classes.photoContainer}>
                        {props.authUserPhoto && 
                        <img className={classes.authUserPhoto} src={props.authUserPhoto} alt="" />}
                    </div>
                    {props.children}
                </ul>
            </nav>
        )
    }
    
    const NavItem = (props) => {
        return (
            <li className={classes.navItem}>
                <a href="#" className={classes.button} onClick={() => setOpen(!open)}>{props.icon}</a>
                {open && props.children}
            </li>
        )
    }
    
    
    const DropdownMenu = (props) => {
        const logoutAndClose = () => {
            props.logout()
            setOpen(false);
        }
        const DropDownItem = (props) => {
            
            return (
                <a ref={node} onClick={props.logout} href='#' className={classes.menuItem}>
                    <span className={classes.leftIcon}>{props.leftIcon}</span>
                   <div >{props.children}</div> 
                    <span className={classes.rightIcon}>{props.rightIcon}</span>
                </a>
            )
        }
    
        return (
            <div className={classes.dropdown}>
                <DropDownItem logout={logoutAndClose}>Log out</DropDownItem>
            </div>
        )
    }
    
    if (props.isAuth) {
        return (
            <Navbar authUserPhoto={props.authUserPhoto} login={props.login} logout={props.logout}>
                <NavItem login={props.login} icon={<Caret />}>
                    <DropdownMenu logout={props.logout}/>
                </NavItem>
            </Navbar>
        )
    } else {
        return null;
    }
   
}



export default Header;
