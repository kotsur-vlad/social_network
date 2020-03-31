import React from 'react';
import styles from './Profile.module.css'

const Profile = () => {
	return (
		<article className={styles.profile}>
			<div>Background</div>
			<div>Avatar + About me</div>
			<div>My posts
				<div>New post</div>
				<div>Last posts</div>
			</div>
		</article>
	);
};

export default Profile;
