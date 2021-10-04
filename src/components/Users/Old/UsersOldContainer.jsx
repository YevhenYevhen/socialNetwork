import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers} from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../Common/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getIsFollowingInProgress, getPageSize, getTotalUsersCount, getUsersSuperSelector } from '../../../redux/usersSelectors';





class UsersContainer extends React.Component {
    /*     constructor(props) {     IF IT'S EMPTY, YOU DON'T HAVE TO HAVE IT, IT'S DONE AUTOMATICALLY
            super(props); 
        } */
    componentDidMount() {

/*         this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.CurrentPage, this.props.pageSize ).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount);
            }) */
/*=================================================================================*/
// CODE REFACTORING. This is what it looked like before THUNK
/*=================================================================================*/
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
/*=================================================================================*/
/*=================================================================================*/
/*=================================================================================*/
//THAT'S IT FOR TODAY!!!
/*=================================================================================*/
/*=================================================================================*/
/*=================================================================================*/
        
    }
    
    onPageChanged = (currentPage) => {

        this.props.getUsers(currentPage, this.props.pageSize);
      /*   this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize ).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                
            }) */
    }
    render() {
        
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}
                        isFollowingInProgress={this.props.isFollowingInProgress} 
                        
                />
          </>

        }
    }


    
let mapStateToProps = (state) => {
    return {
        
       // users: getUsersSelector(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

/*=================================================================================*/
// CODE REFACTORING. YOU DON'T HAVE TO DISPATCH MANUALLY, REDUX CAN DO THAT FOR YOU
/*=================================================================================*/

/* export default connect(mapStateToProps, {
    mapDispfollow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainer); */

/*=================================================================================*/
// CODE REFACTORING. IF THE PROPERTY AND THE VALUE HAVE THE SAME NAME, YOU DON'T 
// HAVE TO HAVE IT AS IT IS ABOVE, BUT SHORTEN IT AS IT IS BELOW. 
/*=================================================================================*/



/* export default connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers })(UsersContainer);
 */

    export default compose(
        connect(mapStateToProps,
            { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers })
    )(UsersContainer);

