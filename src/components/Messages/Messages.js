import React from "react";
import styles from "./Messages.module.css"

const Messages = () => {
	return (
		<div className={styles.messages}>
			<div className={styles.dialog}>
				Dialog with messages
				<div className={styles.dialogItem}>Hi</div>
				<div className={styles.dialogItem}>Hello</div>
				<div className={styles.dialogItem}>How are u doing?</div>
				<div className={styles.dialogItem}>Ty, nice</div>
			</div>
			<div className={styles.dialogList}>
				List of dialogs with users
				<div className={styles.dialogUserItem + ' ' + styles.active}>Kim</div>
				<div className={styles.dialogUserItem}>Tim</div>
				<div className={styles.dialogUserItem}>Vasya</div>
				<div className={styles.dialogUserItem}>Putin</div>
			</div>
		</div>
	);
};

export default Messages;
