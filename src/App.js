import React from 'react';
import {Route} from "react-router-dom";
import PropTypes from "prop-types";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

const App = (props) => {

	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path={"/profile"} render={ () => <Profile state={props.state.profilePage} dispatch={props.dispatch} /> }/>
				<Route path={"/messages"} render={ () => <Messages state={props.state.messagesPage}/> }/>
			</div>
		</div>
	);
};

export default App;

App.propTypes = {
	state: PropTypes.shape ({
		profilePage: PropTypes.object,
		messagesPage: PropTypes.object
	})
};
