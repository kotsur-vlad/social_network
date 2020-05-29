import {connect} from "react-redux";

import {sendNewMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import Messages from "./Messages";

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
			dispatch(updateNewMessageTextAC(mewMessage));
		},
		sendMessage: () => {
			dispatch(sendNewMessageAC());
		}
	}
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
