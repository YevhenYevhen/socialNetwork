import classes from './Music.module.css';

const Music = () => {
    return (
        <div>
            <img className={classes.musicPic} src="https://vgywm.com/wp-content/uploads/2019/03/apple-music-note-800x420.jpg" alt="" />
            <p>Wanna listen to some music, babe?</p>
        </div>
    )
}

export default Music;