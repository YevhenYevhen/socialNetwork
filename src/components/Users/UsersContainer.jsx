import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader';
import { usersAPI }   from '../../Api/api';




class UsersContainer extends React.Component {
    /*     constructor(props) {     IF IT'S EMPTY, YOU DON'T HAVE TO HAVE IT, IT'S DONE AUTOMATICALLY
            super(props); 
        } */
    componentDidMount() {


        usersAPI.getUsers(this.props.CurrentPage, this.props.pageSize ).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount);
            })
    }
    
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize ).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                
            })
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
                />
          </>

        }
    }



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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



export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);


