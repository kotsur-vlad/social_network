import React from "react";
import PropTypes from "prop-types";

import styles from "./MessageItem.module.css"

const MessageItem = (props) => {
	return (
		<div className={styles.messageItem}>{props.message}</div>
	)
};

export default MessageItem;

MessageItem.propTypes = {
	message: PropTypes.string
};
