const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

let initialState = {
	messages: [
		{id: 1, message: "Hi"},
		{id: 2, message: "Hello"},
		{id: 3, message: "How are u doing?"},
		{id: 4, message: "Ty, nice"}
	],
	newMessageText: "AAAAA",
	dialogs: [
		{id: 1, name: "Kim"},
		{id: 2, name: "Tim"},
		{id: 3, name: "Vasya"},
		{id: 4, name: "Putin"}
	]
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.messageText;
			return state;
		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText
			}
			state.messages.push(newMessage);
			state.newMessageText = "";
			return state;
		default :
			return state;
	}
};

export const updateNewMessageTextActionCreator = (mewMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	messageText: mewMessage
})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export default messagesReducer;