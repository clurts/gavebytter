import { useState, useEffect } from "react";
import Splash from "../components/Splash";
import Login from "../components/Login";

const Home = () => {
	const [splash, setSplash] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSplash(false);
		}, 1500);
	}, []);

	return <>{splash ? <Splash /> : <Login />}</>;
};

export default Home;
