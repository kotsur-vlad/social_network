import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li><a href="/profile">Profile</a></li>
				<li><a href="/messages">Messages</a></li>
				<li><a href="#">News</a></li>
				<li><a href="#">Music</a></li>
				<li><a href="#">Settings</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;
