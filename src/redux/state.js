const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, post: "I want to learn React", likeCount: 27},
				{id: 2, post: "I need new friends", likeCount: 33},
				{id: 3, post: "Hi, it's my first post", likeCount: 99},
			],
			newPostText: "FFFFF"
		},
		messagesPage: {
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
	},
	_callSubscriber () {
		console.log ("State changed");
	},

	getState () {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	// addPost () {
	//
	// },
	// updateNewPostText (postMessage) {
	//
	// },

	dispatch (action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 4,
				post: this._state.profilePage.newPostText,
				likeCount: 0
			}
			this._state.profilePage.posts.push (newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber (this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.postText;
			this._callSubscriber (this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.messagesPage.newMessageText = action.messageText;
			this._callSubscriber (this._state);
		} else if (action.type === SEND_NEW_MESSAGE) {
			let newMessage = {
				id: 5,
				message: this._state.messagesPage.newMessageText
			}
			this._state.messagesPage.messages.push (newMessage);
			this._state.messagesPage.newMessageText = "";
			this._callSubscriber (this._state);
		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (mewPostMessage) => ({type: UPDATE_NEW_POST_TEXT, postText: mewPostMessage})

export const updateNewMessageTextActionCreator = (mewMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: mewMessage})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export default store;

window.store = store;