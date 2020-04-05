import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbarList}>
				<li className={styles.item}><NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink></li>
				<li className={styles.item}><NavLink to="/messages" activeClassName={styles.activeLink}>Messages</NavLink></li>
				<li className={styles.item}><a href="#">News</a></li>
				<li className={styles.item}><a href="#">Music</a></li>
				<li className={styles.item}><a href="#">Settings</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;
