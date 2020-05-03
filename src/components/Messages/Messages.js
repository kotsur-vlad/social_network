import React from "react";
import PropTypes from "prop-types";

import styles from "./Messages.module.css";
import MessageItem from "./DialogItem/MessageItem";
import DialogItem from "./DialogUserItem/DialogItem";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";

const Messages = (props) => {
	let messagesElements = props.state.messages.map (mess => <MessageItem message={mess.message}/>);

	let dialogsElements = props.state.dialogs.map (dial => <DialogItem id={dial.id} name={dial.name}/>);

	let onSendMessageClick = () => {
		props.dispatch(sendNewMessageActionCreator());
	};

	let onNewMessageChange = (e) => {
		props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
	};

	return (
		<div className={styles.messages}>
			<div className={styles.messagesElements}>
				<div>
					Messages of dialog with some user.
					{messagesElements}
				</div>
				<div className={styles.newMessage}>
					<textarea placeholder="Type your message" value={props.state.newMessageText}
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
	state: PropTypes.shape ({
		messages: PropTypes.arrayOf (PropTypes.object),
		dialogs: PropTypes.arrayOf (PropTypes.object)
	})
};
