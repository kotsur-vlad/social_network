const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

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
			return {
				...state,
				newMessageText: action.messageText
			}
		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: 6,
				message: state.newMessageText
			}
			return {
				...state,
				newMessageText: "",
				messages: [...state.messages, newMessage]
			}
		default :
			return state;
	}
};

export const updateNewMessageTextAC = (mewMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	messageText: mewMessage
})
export const sendNewMessageAC = () => ({type: SEND_NEW_MESSAGE})

export default messagesReducer;