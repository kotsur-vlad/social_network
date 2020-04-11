import React from "react";
import styles from "./DialogUserItem.module.css"
import {NavLink} from "react-router-dom";

const DialogUserItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={styles.dialogUserItem}>
			<NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	)
};

export default DialogUserItem;
