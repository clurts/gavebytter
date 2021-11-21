import { useState, useEffect } from "react";
import Splash from "../components/Splash";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [splash, setSplash] = useState(true);
	let navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setSplash(false);
		}, 1500);
	}, []);

	return <>{splash ? <Splash /> : <Login />}</>;
};

export default Home;
