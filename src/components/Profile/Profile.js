import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={styles.profile}>
			<div>Background</div>
			<div>Avatar + About me</div>
			<MyPosts/>
		</div>
	);
};

export default Profile;
