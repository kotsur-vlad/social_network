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
	return (
		<div className={styles.messages}>
			<div className={styles.dialog}>
				Dialog with messages
				<DialogItem message={"Hi"}/>
				<DialogItem message={"Hello"}/>
				<DialogItem message={"How are u doing?"}/>
				<DialogItem message={"Ty, nice"}/>
			</div>
			<div className={styles.dialogList}>
				List of dialogs with users
				<DialogUserItem id={"1"} name={"Kim"}/>
				<DialogUserItem id={"2"} name={"Tim"}/>
				<DialogUserItem id={"3"} name={"Vasya"}/>
				<DialogUserItem id={"4"} name={"Putin"}/>
			</div>
		</div>
	);
};

export default Messages;
