import classes from './Friend.module.css';
const Friend = (props) => {

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.title}>Friends</div> 
                <div className={classes.friendsBox}>
                    {props.friends.map(f => {
                        return <div className={classes.friend} key={f.id}>
                            <img className={classes.friendPhoto} src={f.photo} alt="" />
                            <div className={classes.friendName}>{f.name}</div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Friend;