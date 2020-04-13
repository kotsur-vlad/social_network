import React from 'react';

import styles from './Post.module.css'

const Post = (props) => {
	return (
		<div className={styles.item}>
			<img src="https://ae01.alicdn.com/kf/Hbc9b81dd7d274298aeecb42331df610fW/5d-Diy.jpg_q50.jpg" alt="avatar"/>
			{props.message}
			<div>
				/Like/ {props.likeCount}
			</div>
		</div>
	);
};

export default Post;
