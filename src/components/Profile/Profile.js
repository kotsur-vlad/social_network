import React from 'react';
import PropTypes from "prop-types";

import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

	return (
		<div className={styles.profile}>
			<ProfileInfo/>
			<MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
		</div>
	);
};

export default Profile;

Profile.propTypes = {
	state: PropTypes.shape ({
		posts: PropTypes.array,
	})
};
