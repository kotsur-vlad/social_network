import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea>Type a new post here</textarea>
				<button>Add new post</button>
			</div>
			<div>
				<Post/>
				<Post/>
				<Post/>
			</div>
		</div>
	);
};

export default MyPosts;
