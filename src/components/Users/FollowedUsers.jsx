import React from 'react'
import { connect } from 'react-redux'

 function FollowedUsers({followedUsers}) {
    return (
        <div>
            {followedUsers.map(u => <div key={u.name}>{u.name}</div>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    followedUsers: state.usersPage.followedUsers
})

export default connect(mapStateToProps)(FollowedUsers);