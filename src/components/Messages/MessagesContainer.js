import React from "react";

import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		messages: state.messagesPage.messages,
		dialogs: state.messagesPage.dialogs,
		newMessageText: state.messagesPage.newMessageText
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (mewMessage) => {
			dispatch(updateNewMessageTextActionCreator(mewMessage));
		},
		sendMessage: () => {
			dispatch(sendNewMessageActionCreator());
		}
	}
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
