/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Home = () => {
	const [registeredUser, setRegisteredUser] = useState(
		localStorage.getItem("registered") || false
	);

	console.log(registeredUser);
	return (
		<>
			<h2>this is the home view</h2>

			{registeredUser ? <Login /> : <Register />}
		</>
	);
};

export default Home;
