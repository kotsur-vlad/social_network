import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./DialogItem.module.css"

const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={styles.dialogItem}>
			<NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	)
};

export default DialogItem;

DialogItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string
};
