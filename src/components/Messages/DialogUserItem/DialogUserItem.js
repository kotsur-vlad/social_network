import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./DialogUserItem.module.css"

const DialogUserItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={styles.dialogUserItem}>
			<NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	)
};

export default DialogUserItem;

DialogUserItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string
};
