import React from "react";
// import PropTypes from "prop-types";

import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

	let state = props.store.getState();

	let sendMessage = () => {
		props.store.dispatch(sendNewMessageActionCreator());
	};

	let newMessageText = (mewMessage) => {
		props.store.dispatch(updateNewMessageTextActionCreator(mewMessage));
	};

	return (
		<Messages updateNewMessageText={newMessageText} sendMessage={sendMessage} messages={state.messagesPage.messages}
				  dialogs={state.messagesPage.dialogs} newMessageText={state.messagesPage.newMessageText}/>
	);
};

export default MessagesContainer;

// MessagesContainer.propTypes = {
// 	store: PropTypes.objectOf(PropTypes.object)
// };
