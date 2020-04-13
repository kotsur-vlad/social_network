import React from 'react';
import PropTypes from "prop-types";

import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.posts.map (post => <Post message={post.message} likeCount={post.likeCount}/>);

	return (
		<div className={styles.myPosts}>
			<h2>
				My posts
			</h2>
			<div>
				<textarea>Type a new post here</textarea>
				<button>Add new post</button>
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
