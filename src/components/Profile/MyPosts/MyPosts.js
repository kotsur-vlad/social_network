import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

	let posts = [
		{message: "I want to learn React", likeCount: 27},
		{message: "I need new friends", likeCount: 33},
		{message: "Hi, it\'s my first post", likeCount: 99},
	];

	let postsElements = posts.map (post => <Post message={post.message} likeCount={post.likeCount}/>);

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
