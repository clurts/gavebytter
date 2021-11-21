import AuthContextProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import ToBuyFor from "./components/ToBuyFor";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<h1>this is where the app goes</h1>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="tobuyfor" element={<ToBuyFor />} />
				</Routes>
			</div>
		</AuthContextProvider>
	);
}

export default App;
