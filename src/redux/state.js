export let state = {
	profilePage: {
		posts: [
			{id: 1, message: "I want to learn React", likeCount: 27},
			{id: 2, message: "I need new friends", likeCount: 33},
			{id: 3, message: "Hi, it's my first post", likeCount: 99},
		]
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
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 4,
		message: postMessage,
		likeCount: 0
	}
	state.profilePage.posts.push(newPost);
};
