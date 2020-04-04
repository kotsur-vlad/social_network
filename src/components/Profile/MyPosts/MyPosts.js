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
				<Post message={"I want to learn React"} likeCount={27}/>
				<Post message={"I need new friends"} likeCount={33}/>
				<Post message={"Hi, it\'s my first post"} likeCount={99}/>
			</div>
		</div>
	);
};

export default MyPosts;
