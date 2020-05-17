import React from "react";
import PropTypes from "prop-types";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

	let state = props.store.getState()

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let newPostChange = (mewPostMessage) => {
		let action = updateNewPostTextActionCreator(mewPostMessage);
		props.store.dispatch(action);
	};

	return (
		<MyPosts updateNewPostText={newPostChange} addPost={addPost} posts={state.profilePage.posts}
				 newPostText={state.profilePage.newPostText}/>
	);
};

export default MyPostsContainer;

MyPostsContainer.propTypes = {
	store: PropTypes.objectOf(PropTypes.object)
};
