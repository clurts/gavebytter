import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Wishlist = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { username, userId, token, myList, updateWishlist } =
		useContext(AuthContext);

	const onSubmit = (data) => {
		axios
			.put(`https://presentswap.herokuapp.com/users/${userId}`, data, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then((response) => {
				if (response.status === 200) {
					updateWishlist(response.data);
					navigate("/tobuyfor");
				}
			})
			.catch((error) => {
				console.log("noget gik galt");
			});
	};

	return (
		<div>
			<h1>Ønskeliste</h1>

			<div className="centered">
				<p>Hej {username}. </p>
				<p>Her kan du skrive lidt om, hvad du ønsker dig: </p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="formgroup">
					<label htmlFor="wishlist">Mine ønsker:</label>
					<textarea
						name="wishlist"
						defaultValue={myList}
						id="wishlist"
						{...register("wishlist")}
					/>
				</div>

				<button type="submit">Opdater ønskeliste</button>
				<Link className="button" to="/tobuyfor">
					Tilbage
				</Link>
			</form>
		</div>
	);
};

export default Wishlist;
