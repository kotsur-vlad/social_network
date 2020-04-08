import React from "react";
import styles from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const DialogUserItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={styles.dialogUserItem}>
			<NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	)
};

const DialogItem = (props) => {
	return (
		<div className={styles.dialogItem}>{props.message}</div>
	)
};

const Messages = () => {

	let dialogs = [
		{id: 1, message: "Hi"},
		{id: 2, message: "Hello"},
		{id: 3, message: "How are u doing?"},
		{id: 4, message: "Ty, nice"}
	];

	let dialogElements = dialogs.map( dialog => <DialogItem message={dialog.message}/>	);

	let dialogLists = [
		{id: 1, name: "Kim"},
		{id: 2, name: "Tim"},
		{id: 3, name: "Vasya"},
		{id: 4, name: "Putin"}
	];

	let dialogListElements = dialogLists.map( dialogList => <DialogUserItem id={dialogList.id} name={dialogList.name}/>	);

	return (
		<div className={styles.messages}>
			<div className={styles.dialog}>
				Dialog with messages
				{dialogElements}
			</div>
			<div className={styles.dialogList}>
				List of dialogs with users
				{dialogListElements}
			</div>
		</div>
	);
};

export default Messages;
