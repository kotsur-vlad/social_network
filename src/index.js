import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store-redux";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App store={store}/>
				</Provider>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
