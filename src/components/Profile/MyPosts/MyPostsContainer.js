import {connect} from "react-redux";

import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (mewPostMessage) => {
			let action = updateNewPostTextAC(mewPostMessage);
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostAC());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
