const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const messagesReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.messageText;
			return state;
		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText
			}
			state.messages.push (newMessage);
			state.newMessageText = "";
			return state;
		default :
			return state;
	}
};

export const updateNewMessageTextActionCreator = (mewMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: mewMessage})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export default messagesReducer;