let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "I want to learn React", likeCount: 27},
				{id: 2, message: "I need new friends", likeCount: 33},
				{id: 3, message: "Hi, it's my first post", likeCount: 99},
			],
			newPostText: "FFFFFFFF"
		},
		messagesPage: {
			dialogs: [
				{id: 1, message: "Hi"},
				{id: 2, message: "Hello"},
				{id: 3, message: "How are u doing?"},
				{id: 4, message: "Ty, nice"}
			],
			dialogLists: [
				{id: 1, name: "Kim"},
				{id: 2, name: "Tim"},
				{id: 3, name: "Vasya"},
				{id: 4, name: "Putin"}
			]
		}
	},
	_callSubscriber() {
		console.log("State changed");
	},
	getState() {
		return this._state;
	},
	addPost () {
		let newPost = {
			id: 4,
			message: this._state.profilePage.newPostText,
			likeCount: 0
		}
		this._state.profilePage.posts.push (newPost);
		this._state.profilePage.newPostText = "";
		this._callSubscriber (this._state);
	},
	updateNewPostText (postMessage) {
		this._state.profilePage.newPostText = postMessage;
		this._callSubscriber (this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	}
}

export default store;

window.store = store;