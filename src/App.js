import AuthContextProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import ToBuyFor from "./components/ToBuyFor";
import GlobalStyles from "./components/GlobalStyles";
import Wishlist from "./components/wishlist";
import Register from "./components/Register";

function App() {
	return (
		<AuthContextProvider>
			<GlobalStyles />
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="tobuyfor" element={<ToBuyFor />} />
					<Route path="wishlist" element={<Wishlist />} />
				</Routes>
			</div>
		</AuthContextProvider>
	);
}

export default App;
