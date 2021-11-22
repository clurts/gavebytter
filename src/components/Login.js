import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
			<h1>Log ind</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="formgroup">
					<label htmlFor="identifier">E-mail:</label>
					<input
						type="email"
						name="identifier"
						id="identifier"
						{...register("identifier")}
					/>
				</div>
				<div className="formgroup">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						{...register("password")}
					/>
				</div>
				{loginError ? (
					<div className="formgroup">
						<p>{loginError}</p>
					</div>
				) : null}
				<button type="submit">Log ind</button>
			</form>
			<p className="centered" style={{ marginTop: "3rem" }}>
				Har du aldrig været her før?
				<br />
				<Link to="/register">Registrér dig her!</Link>
			</p>
		</div>
	);
};

export default Login;
