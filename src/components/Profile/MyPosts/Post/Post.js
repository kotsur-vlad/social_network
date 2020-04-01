import React from 'react';
import styles from './Post.module.css'

const Post = () => {
	return (
		<div className={styles.item}>
			<img src="https://ae01.alicdn.com/kf/Hbc9b81dd7d274298aeecb42331df610fW/5d-Diy.jpg_q50.jpg" alt="avatar"/>
			It's your post
			<div>
				/Like/
			</div>
		</div>
	);
};

export default Post;
