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
					max-width: 25em;
					padding: 0 2em;
					margin: 0 auto;
					box-sizing: border-box;
					display: block;
				}
				.formgroup {
					margin-bottom: 1.5em;
				}
				input {
					padding: 0.5em;
					font-size: 1em;
					display: block;
					margin: 0.5em 0;
					box-sizing: border-box;
					width: 100%;
				}
				label {
					display: block;
					margin-bottom: 0.25em;
					color: whitesmoke;
				}

				.button,
				button[type="submit"] {
					font-size: 1em;
					font-weight: bold;
					display: inline-block;
					padding: 0.5em;
					border-radius: 0.25em;
					background-color: white;
					margin-right: 1em;
					border: none;
					text-decoration: none;
					color: black;
				}

				p {
					font-size: 1.125rem;
					margin-top: 0.5em;
					color: whitesmoke;
				}
				a {
					color: white;
					font-weight: bold;
				}
				textarea {
					display: block;
					width: 100%;
					height: 20em;
					resize: none;
					font-size: 1em;
					line-height: 1.5;
					padding: 0.5em;
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
