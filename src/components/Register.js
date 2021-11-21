import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const { login } = useContext(AuthContext);
	const [registerError, setRegisterError] = useState();

	const onSubmit = (data) => {
		console.log(data.password);
		if (data.password === data.password2) {
			axios
				.post(
					"https://presentswap.herokuapp.com/auth/local/register",
					data
				)
				.then((response) => {
					if (response.status === 200) {
						setRegisterError(null);
						login(response.data);
						localStorage.setItem("registered", true);
					}
				})
				.catch((error) => {
					console.log("something went wrong... ");
				});
		} else {
			setRegisterError("De indtastede passwords er ikke ens...");
		}
	};

	return (
		<div>
			<h1>Registrer dig som bruger</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Navn:</label>
				<input
					type="text"
					name="username"
					id="username"
					{...register("username")}
				/>

				<label htmlFor="email">E-mail:</label>
				<input
					type="email"
					name="email"
					id="email"
					{...register("email")}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					{...register("password")}
				/>

				<label htmlFor="password2">Password</label>
				<input
					type="password"
					name="password2"
					id="password2"
					{...register("password2")}
				/>

				<label htmlFor="spouse">Ægtefælle / Kæreste:</label>
				<input
					type="text"
					name="spouse"
					id="spouse"
					{...register("spouse")}
				/>
				<p>
					Hvis du indtaster din ægtefælle eller kærestes navn i dette
					felt, sikrer du dig imod at trække ham eller hende.
				</p>

				{registerError ? <p>{registerError}</p> : null}
				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default Login;
