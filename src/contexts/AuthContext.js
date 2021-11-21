import { createContext, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [cookies, setCookie, removeCookie] = useCookies([
		"tokenCookie",
		"userIdCookie",
		"userNameCookie",
		"buyforNameCookie",
		"buyforListCookie",
	]);
	const [token, setToken] = useState(cookies.tokenCookie);
	const [userId, setUserId] = useState(cookies.userIdCookie);
	const [username, setUsername] = useState(cookies.usernameCookie);
	const [buyforName, setBuyforName] = useState(cookies.buyforNameCookie);
	const [buyforList, setBuyforList] = useState(cookies.buyforListCookie);

	const login = (data) => {
		//sessionStorage.setItem("token", userToken);
		setCookie("tokenCookie", data.jwt);
		setCookie("userIdCookie", data.user.id);
		setCookie("usernameCookie", data.user.username);
		setToken(data.jwt);
		setUserId(data.user.id);
		setUsername(data.user.username);

		if (data.user.tobuyfor) {
			setCookie("buyforNameCookie", data.user.tobuyfor.username);
			setCookie("buyforListCookie", data.user.tobuyfor.wishlist);
			setBuyforName(data.user.tobuyfor.username);
			setBuyforList(data.user.tobuyfor.wishlist);
		}
	};

	const logout = () => {
		removeCookie("tokenCookie");
		removeCookie("userIdCookie");
		removeCookie("usernameCookie");
		removeCookie("buyforNameCookie");
		removeCookie("buyforListCookie");

		setToken(null);
		setUserId(null);
		setUsername(null);
		setBuyforName(null);
		setBuyforList(null);
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
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
