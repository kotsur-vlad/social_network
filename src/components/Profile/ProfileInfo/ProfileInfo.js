import React from 'react';

import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={styles.profileInfo}>
			<div className={styles.backgroundImage}>
				<img src="https://gerdhoffmann.com/wp-content/uploads/2017/01/gh_2013-01-26-06-15-58_0088-1210x423.jpg" alt="backgroundImage"/>
			</div>
			<div className={styles.descriptionBlock}>
				Avatar + About me
			</div>
		</div>
	);
};

export default ProfileInfo;
