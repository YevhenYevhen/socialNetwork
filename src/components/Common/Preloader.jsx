import preloader from '../../assets/images/preloader.gif';
import classes from './Preloader.module.css'


let Preloader = (props) => {
    return (
        <img className={classes.preloader} src={preloader} alt=''/>
    )
}

export default Preloader;