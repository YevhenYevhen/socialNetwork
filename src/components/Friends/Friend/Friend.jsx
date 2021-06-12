import classes from './../Friends.module.css';


let friends = {
    friendsData: [
        { id: 1, name: 'Ross', img: 'https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000003441959.jpg' },
        { id: 2, name: 'Rachel', img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxNDEzMTU5NzM3ODI5MzU4/rachel-haircut-gettyimages-138427199.jpg' },
        { id: 3, name: 'Monica', img: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/happy_birthday_courteney_cox_10_dialogues_of_monica_geller_that_friends_fan_can_never_get_enough_of.jpg' }
    ]
};

const Friend = (props) => {
    let friendItem = friends.friendsData.map(friend => <div className={classes.friendItem}><div>{friend.name}</div> <img src={friend.img}></img></div>);
    return (
            <div className={classes.friendItems}>
            {friendItem}
            </div>
    )
}

export default Friend;