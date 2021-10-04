import { connect } from "react-redux";
import Friend from "./Friend";

 const Friends = (props) => {
    return (
        <Friend {...props}></Friend>
    )
}

const mapStateToProps = (state) => ({
    friends: state.profilePage.friends
})

export default connect(mapStateToProps, null)(Friends);