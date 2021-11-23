import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ToBuyFor = () => {
	const { username, buyforName, buyforList, logout } =
		useContext(AuthContext);
	const [theList, setTheList] = useState([]);

	useEffect(() => {
		if (buyforList) {
			let list = buyforList.split("\n");
			let newlist = list.filter((item) => item !== "");
			setTheList(newlist);
		}
	}, [buyforList]);

	theList && console.log(theList);

	return (
		<div className="centered">
			<h2>Hej {username}</h2>

			{buyforName ? (
				<p>Du skal købe gave til {buyforName}</p>
			) : (
				<p>
					Der er ikke trukket lod endnu. Efter der er trukket lod, kan
					du se her, hvem du skal købe gave til ( og hvad vedkommende
					ønsker sig - hvis de altså har skrevet det).
				</p>
			)}

			{buyforName && buyforList ? (
				<>
					<p>{buyforName} ønsker sig:</p>
					<ul>{theList && theList.map((item) => <li>{item}</li>)}</ul>
				</>
			) : null}
			<p>
				Du kan opdatere din egen ønskeliste{" "}
				<Link to="/wishlist">på denne side</Link>
			</p>

			<p style={{ marginTop: "4rem" }}>
				Er du færdig med at kigge for i dag?{" "}
				<span onClick={() => logout()} style={{ cursor: "pointer" }}>
					<strong>Log ud her!</strong>
				</span>
			</p>
		</div>
	);
};

export default ToBuyFor;
