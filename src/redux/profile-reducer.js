const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
	posts: [
		{id: 1, post: "I want to learn React", likeCount: 27},
		{id: 2, post: "I need new friends", likeCount: 33},
		{id: 3, post: "Hi, it's my first post", likeCount: 99},
	],
	newPostText: "FFFFF"
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				post: state.newPostText,
				likeCount: 0
			}
			return {
				...state,
				newPostText: "",
				posts: [...state.posts, newPost]
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.postText
			}
		default :
			return state;
	}
};

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (mewPostMessage) => ({
	type: UPDATE_NEW_POST_TEXT,
	postText: mewPostMessage
})

export default profileReducer;