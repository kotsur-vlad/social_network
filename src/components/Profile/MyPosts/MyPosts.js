import React from 'react';
import PropTypes from "prop-types";

import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

	let newPostElement = React.createRef ();

	let onAddPostClick = () => {
		props.dispatch (addPostActionCreator ());
	};

	let onNewPostChange = () => {
		let mewPostMessage = newPostElement.current.value;
		let action = updateNewPostTextActionCreator (mewPostMessage);
		props.dispatch (action);
	};

	let postsElements = props.posts.map (p => <Post message={p.post} likeCount={p.likeCount}/>);

	return (
		<div className={styles.myPosts}>
			<h2>
				My posts
			</h2>
			<div>
				<textarea onChange={onNewPostChange} ref={newPostElement} value={props.newPostText}/>
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
