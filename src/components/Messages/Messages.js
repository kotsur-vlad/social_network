import React from "react";
import PropTypes from "prop-types";

import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogUserItem from "./DialogUserItem/DialogUserItem";

const Messages = (props) => {
	let dialogElements = props.state.dialogs.map (dialog => <DialogItem message={dialog.message}/>);

	let dialogListElements = props.state.dialogLists.map (dialogList => <DialogUserItem id={dialogList.id}
																						name={dialogList.name}/>);

	return (
		<div className={styles.messages}>
			<div className={styles.dialog}>
				Dialog with messages
				{dialogElements}
			</div>
			<div className={styles.dialogList}>
				List of dialogs with users
				{dialogListElements}
			</div>
		</div>
	);
};

export default Messages;

Messages.propTypes = {
	state: PropTypes.shape ({
		dialogs: PropTypes.arrayOf (PropTypes.object),
		dialogLists: PropTypes.arrayOf (PropTypes.object)
	})
};
