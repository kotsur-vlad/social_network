import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

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

	dispatch (action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

		this._callSubscriber(this._state);
	}
}

export default store;

window.store = store;