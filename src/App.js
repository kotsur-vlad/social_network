import React from 'react';
import {Route} from "react-router-dom";
import PropTypes from "prop-types";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = (props) => {

	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path={"/profile"} render={ () => <Profile store={props.store}/> }/>
				<Route path={"/messages"} render={ () => <MessagesContainer store={props.store}/> }/>
			</div>
		</div>
	);
};

export default App;

App.propTypes = {
	state: PropTypes.shape({
		profilePage: PropTypes.object,
		messagesPage: PropTypes.object
	})
};
