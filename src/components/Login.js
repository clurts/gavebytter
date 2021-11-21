import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const { login } = useContext(AuthContext);
	const [loginError, setLoginError] = useState();

	const onSubmit = (data) => {
		axios
			.post("https://presentswap.herokuapp.com/auth/local", data)
			.then((response) => {
				if (response.status === 200) {
					setLoginError(null);
					login(response.data);
				}
			})
			.catch((error) => {
				setLoginError(
					"Der er fejl i enten brugernavn eller password..."
				);
			});
	};

	return (
		<div>
			<h1>Log in</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="identifier">E-mail:</label>
				<input
					type="email"
					name="identifier"
					id="identifier"
					{...register("identifier")}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					{...register("password")}
				/>
				{loginError ? <p>{loginError}</p> : null}
				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default Login;
