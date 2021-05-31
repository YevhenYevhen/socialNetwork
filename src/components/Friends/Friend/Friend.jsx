import classes from './../Friends.module.css';




const Friend = (props) => {
    
    let friendItem = props.state.map(friend => <div className={classes.friendItem}><div>{friend.name}</div> <img src={friend.img}></img></div>);
    return (
            <div className={classes.friendItems}>
            {friendItem}
            </div>
    )
}

export default Friend;