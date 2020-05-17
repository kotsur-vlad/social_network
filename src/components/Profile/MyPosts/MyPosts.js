import React from "react";
import PropTypes from "prop-types";

import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let onAddPostClick = () => {
		props.addPost();
	};

	let onNewPostChange = (e) => {
		let mewPostMessage = e.currentTarget.value;
		props.updateNewPostText(mewPostMessage);
	};

	let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

	return (
		<div className={styles.myPosts}>
			<h2>
				My posts
			</h2>
			<div>
				<textarea onChange={onNewPostChange} value={props.newPostText}/>
				<button onClick={onAddPostClick}>Add new post</button>
			</div>
			<div className={styles.postsItems}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;

MyPosts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
	newPostText: PropTypes.string,
	addPost: PropTypes.func,
	updateNewPostText: PropTypes.func
};
