import React from "react";
import styles from "./DialogItem.module.css"

const DialogItem = (props) => {
	return (
		<div className={styles.dialogItem}>{props.message}</div>
	)
};

export default DialogItem;
