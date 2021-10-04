import { useState, useRef, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { resetUsers, getUsers, follow, unfollow, toggleIsFollowingInProgress} from "../../redux/usersReducer";
import User from "./User";


function UsersInfiniteScroll(props) {
  const [pageNumber, setPageNumber] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  
  useEffect(() => {
    if (props.users)
      props.resetUsers()
  }, [])

  useEffect(() => {
    props.getUsers(pageNumber)
  }, [pageNumber])

  useEffect(() => {
    setHasMore(props.totalUsersCount > props.users.length)
  }, [props.totalUsersCount,  props.users.length])

  const observer = useRef()
  const lastUserElementRef = useCallback(node => {
    if (props.isFetching) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      console.log(entries)
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [props.isFetching, hasMore])



  return (
    
    <User users={props.users}
      //followedUsers={props.followedUsers}
      isFetching={props.isFetching}
      totalUsersCount={props.totalUsersCount}
      isFollowingInProgress={props.isFollowingInProgress}
      follow={props.follow}
      unfollow={props.unfollow}
      toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
      lastUserElementRef={lastUserElementRef}
      />
  );
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  //followedUsers: state.usersPage.followedUsers,
  isFetching: state.usersPage.isFetching,
  totalUsersCount: state.usersPage.totalUsersCount,
  isFollowingInProgress: state.usersPage.isFollowingInProgress,
})

export default compose(
  connect(mapStateToProps,
    { resetUsers, getUsers, follow, unfollow, toggleIsFollowingInProgress }),
  withAuthRedirect
)(UsersInfiniteScroll);


