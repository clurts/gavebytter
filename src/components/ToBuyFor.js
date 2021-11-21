import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ToBuyFor = () => {
	const { username, buyforName, buyforList } = useContext(AuthContext);

	return (
		<>
			<p>Hej {username}</p>

			{buyforName ? (
				<p>Du skal købe gave til {buyforName}</p>
			) : (
				<p>Det er ikke besluttet endnu, hvem du skal købe gave til.</p>
			)}

			{buyforName && buyforList ? (
				<>
					<p>{buyforName} ønsker sig:</p>
					<p>{buyforList}</p>
				</>
			) : null}
		</>
	);
};

export default ToBuyFor;
