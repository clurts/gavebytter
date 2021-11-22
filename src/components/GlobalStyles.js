/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");
				body {
					margin: 0;
					padding-top: 20vh;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
						"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
						"Droid Sans", "Helvetica Neue", sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					color: red;
					background-image: url("/background.jpg");
					background-position: top center;
					background-size: auto;
				}
				h1 {
					font-family: "Merienda", cursive;
					color: gold;
					text-align: center;
				}
				h2 {
					font-family: "Merienda", cursive;
					color: gold;
				}
				form,
				.centered {
					max-width: 25rem;
					padding: 0 2rem;
					margin: 0 auto;
					box-sizing: border-box;
					display: block;
				}
				.formgroup {
					margin-bottom: 1.5rem;
				}
				input {
					padding: 0.5rem;
					font-size: 1rem;
					display: block;
					margin: 0.5rem 0;
					box-sizing: border-box;
					width: 100%;
				}
				label {
					display: block;
					margin-bottom: 0.25rem;
					color: whitesmoke;
				}

				.button,
				button[type="submit"] {
					font-size: 1rem;
					font-weight: bold;
					display: inline-block;
					padding: 0.5rem;
					border-radius: 0.25rem;
					background-color: white;
					margin-right: 1rem;
					border: none;
					text-decoration: none;
					color: black;
				}

				p {
					font-size: 1.125rem;
					margin-top: 0.5rem;
					color: whitesmoke;
				}
				a {
					color: white;
					font-weight: bold;
				}
				textarea {
					display: block;
					width: 100%;
					height: 20rem;
					resize: none;
					font-size: 1rem;
					line-height: 1.5;
					padding: 0.5rem;
					box-sizing: border-box;
					font-family: Arial, Helvetica, sans-serif;
				}
				.App {
					padding-bottom: 2rem;
				}
			`}
		/>
	);
};

export default GlobalStyles;
