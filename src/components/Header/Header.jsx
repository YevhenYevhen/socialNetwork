import React from 'react';
import classes from './Header.module.css';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { ReactComponent as Caret } from '../../assets/icons/caret.svg';
import logoIcon from '../../assets/icons/logo.png'
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../Common/useWindowWidth';
import userPic from '../../assets/images/user.png'


const Header = (props) => {
    const [open, setOpen] = useState(false)
    const node = useRef()
    const windowWidth = useWindowWidth();


    const handleClickOutside = e => {
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
                 <NavLink to='/profile'>
                <div className={classes.title}>
                    <img className={classes.logoIcon} src={logoIcon} alt="" />
                    <span>Social Network</span>
                </div>
                </NavLink>
                <ul className={classes.nav}>
                    <div className={classes.login}>{props.login}</div>
                    <div className={classes.photoContainer}>
                            <NavLink to='/profile'>
                                <img className={classes.authUserPhoto} src={props.authUserPhoto || userPic} alt="" />
                            </NavLink>
                    </div>
                    {props.children}
                </ul>
            </nav>
        )
    }
    
    const NavItem = (props) => {
        return (
            <li className={classes.navItem}>
                <div className={classes.button} onClick={() => setOpen(!open)}>{props.icon}</div>
                {open && props.children}
            </li>
        )
    }
    
    const DropdownMenu = (props) => {
        const logoutAndClose = () => {
            props.logout()
            setOpen(false);
        }
        const close = () => {
            setOpen(false);
        }


        const DropDownItem = (props) => {
            return (
                <div onClick={props.logout || props.close}  className={classes.menuItem}>
                    <span className={classes.leftIcon}>{props.leftIcon}</span> {/* in case an icon is needed */}
                   <div className={classes.navlink}>{props.children}</div> 
                    <span className={classes.rightIcon}>{props.rightIcon}</span> {/* in case an icon is needed */}
                </div>
            )
        }

        return (
            <div ref={node} className={classes.dropdown}>
               {windowWidth < 1130 &&  <>
                <DropDownItem close={close}><NavLink to='/profile'>Profile</NavLink></DropDownItem>
                <DropDownItem close={close}><NavLink to='/dialogs'>Dialogs</NavLink></DropDownItem>
                <DropDownItem close={close}><NavLink to='/news'>News</NavLink></DropDownItem>
                <DropDownItem close={close}><NavLink to='/settings'>Settings</NavLink></DropDownItem>
                <DropDownItem close={close}><NavLink to='/users'>Find Users</NavLink></DropDownItem>
                </>}
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
