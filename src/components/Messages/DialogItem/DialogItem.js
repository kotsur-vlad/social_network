import React from "react";
import PropTypes from "prop-types";

import styles from "./DialogItem.module.css"

const DialogItem = (props) => {
	return (
		<div className={styles.dialogItem}>{props.message}</div>
	)
};

export default DialogItem;

DialogItem.propTypes = {
	message: PropTypes.string
};
