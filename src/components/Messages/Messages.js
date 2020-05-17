import React from "react";
import PropTypes from "prop-types";

import styles from "./Messages.module.css";
import MessageItem from "./DialogItem/MessageItem";
import DialogItem from "./DialogUserItem/DialogItem";

const Messages = (props) => {

	let messagesElements = props.messages.map (mess => <MessageItem message={mess.message}/>);

	let dialogsElements = props.dialogs.map (dial => <DialogItem id={dial.id} name={dial.name}/>);

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let mewMessage = e.currentTarget.value;
		props.updateNewMessageText(mewMessage);
	};

	return (
		<div className={styles.messages}>
			<div className={styles.messagesElements}>
				<div>
					Messages of dialog with some user.
					{messagesElements}
				</div>
				<div className={styles.newMessage}>
					<textarea placeholder="Type your message" value={props.newMessageText}
							  onChange={onNewMessageChange}/>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
			<div className={styles.dialogs}>
				<div>
					List of dialogs with users
					{dialogsElements}
				</div>
			</div>
		</div>
	);
};

export default Messages;

Messages.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object),
	dialogs: PropTypes.arrayOf(PropTypes.object),
	newMessageText: PropTypes.string,
	sendMessage: PropTypes.func,
	updateNewMessageText: PropTypes.func
};
