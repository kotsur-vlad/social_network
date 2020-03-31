import React from 'react';
import './App.css';

function App () {
	return (
		<div className="app-wrapper">
			<header className="header">
				Header
				<img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="logo"/>
			</header>
			<nav className="navigation">
				<ul>
					<li><a href="#">Profile</a></li>
					<li><a href="#">Messages</a></li>
					<li><a href="#">News</a></li>
					<li><a href="#">Music</a></li>
					<li><a href="#">Settings</a></li>
				</ul>
			</nav>
			<article className="content">
				<div>Background</div>
				<div>Avatar + About me</div>
				<div>My posts
					<div>New post</div>
					<div>Last posts</div>
				</div>
			</article>
		</div>
	);
}

export default App;
