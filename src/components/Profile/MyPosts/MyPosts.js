import React from 'react';
import PropTypes from "prop-types";

import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let newPostText = React.createRef();

	let onAddPostClick = () => {
		let mewPostMessage = newPostText.current.value;
		props.addPost(mewPostMessage);
		newPostText.current.value = "";
	};

	let postsElements = props.posts.map (post => <Post message={post.message} likeCount={post.likeCount}/>);

	return (
		<div className={styles.myPosts}>
			<h2>
				My posts
			</h2>
			<div>
				<textarea ref={newPostText}>Type a new post here</textarea>
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
	posts: PropTypes.arrayOf (PropTypes.object)
};
