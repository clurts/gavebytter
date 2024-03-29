import AuthContextProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./views/Home";
import ToBuyFor from "./components/ToBuyFor";
import GlobalStyles from "./components/GlobalStyles";
import Wishlist from "./components/wishlist";
import Register from "./components/Register";
import MyPWAPrompt from "./components/MyPWAPrompt";

function App() {
	return (
		<AuthContextProvider>
			<GlobalStyles />
			<MyPWAPrompt />
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="tobuyfor" element={<ToBuyFor />} />
					<Route path="wishlist" element={<Wishlist />} />
				</Routes>
			</div>
			<ToastContainer position="top-center" hideProgressBar={true} />
		</AuthContextProvider>
	);
}

export default App;
