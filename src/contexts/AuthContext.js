import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [cookies, setCookie, removeCookie] = useCookies([
		"tokenCookie",
		"userIdCookie",
		"userNameCookie",
		"buyforNameCookie",
		"buyforListCookie",
		"myListCookie",
	]);
	const navigate = useNavigate();
	const [token, setToken] = useState(cookies.tokenCookie);
	const [userId, setUserId] = useState(cookies.userIdCookie);
	const [username, setUsername] = useState(cookies.usernameCookie);
	const [myList, setMyList] = useState(cookies.myListCookie);
	const [buyforName, setBuyforName] = useState(cookies.buyforNameCookie);
	const [buyforList, setBuyforList] = useState(cookies.buyforListCookie);

	const login = (data) => {
		//sessionStorage.setItem("token", userToken);
		setCookie("tokenCookie", data.jwt);
		setCookie("userIdCookie", data.user.id);
		setCookie("usernameCookie", data.user.username);
		setCookie("myListCookie", data.user.wishlist);
		setToken(data.jwt);
		setUserId(data.user.id);
		setUsername(data.user.username);
		setMyList(data.user.wishlist);

		if (data.user.tobuyfor) {
			setCookie("buyforNameCookie", data.user.tobuyfor.username);
			setCookie("buyforListCookie", data.user.tobuyfor.wishlist);
			setBuyforName(data.user.tobuyfor.username);
			setBuyforList(data.user.tobuyfor.wishlist);
		}
		navigate("/tobuyfor");
	};

	const updateWishlist = (data) => {
		setCookie("myListCookie", data.wishlist);
		setMyList(data.wishlist);
	};

	const logout = () => {
		removeCookie("tokenCookie");
		removeCookie("userIdCookie");
		removeCookie("usernameCookie");
		removeCookie("buyforNameCookie");
		removeCookie("buyforListCookie");
		removeCookie("myListCookie");

		setToken(null);
		setUserId(null);
		setUsername(null);
		setBuyforName(null);
		setBuyforList(null);
		setMyList(null);
		navigate("/");
	};
	return (
		<AuthContext.Provider
			value={{
				token,
				login,
				logout,
				userId,
				username,
				buyforName,
				buyforList,
				myList,
				updateWishlist,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
