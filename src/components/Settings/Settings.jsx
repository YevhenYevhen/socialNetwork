import classes from './Settings.module.css'

const Settings = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.settingsPic} src="https://cdn.iconscout.com/icon/free/png-512/apple-settings-1-493162.png" alt="" />
            <p>Oops, no settings for you yet!</p>
        </div>
    )
}

export default Settings;