import React from "react";

import styles from "./Users.module.css"

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers(
			[
				{
					id: 1,
					avatar: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
					isFollow: true,
					firstName: "Dima",
					lastName: "A.",
					status: "Hello",
					location: {country: "Belarus", city: "Minsk"}
				},
				{
					id: 2,
					avatar: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
					isFollow: false,
					firstName: "Misha",
					lastName: "J.",
					status: "Bye",
					location: {country: "Russia", city: "Norilsk"}
				},
				{
					id: 3,
					avatar: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
					isFollow: true,
					firstName: "Sasha",
					lastName: "L.",
					status: "Hello-Bye",
					location: {country: "Belarus", city: "Pinsk"}
				}
			]
		)
	}

	let users = props.users.map(u => {
		return (<div key={u.id}>
			<div>
				<img className={styles.avatar} src={u.avatar} alt="avatar"/>
				{
					u.isFollow
						? <button onClick={ () => {props.unFollow (u.id)} }>Unfollow</button>
						: <button onClick={ () => {props.follow(u.id)} }>Follow</button>
				}
			</div>
			<div>
				{u.firstName} {u.lastName} {u.status}
				<div>
					{u.location.city} {u.location.country}
				</div>
			</div>
		</div>)
	})

	return (
		<div>
			Users
			<div>
				{users}
			</div>
		</div>
	)
};

export default Users;