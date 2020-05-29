import React from 'react';
import PropTypes from "prop-types";

import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

	return (
		<div className={styles.profile}>
			<ProfileInfo/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;

Profile.propTypes = {
	state: PropTypes.shape ({
		posts: PropTypes.array,
	})
};
