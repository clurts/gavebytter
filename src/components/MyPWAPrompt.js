import PWAPrompt from "react-ios-pwa-prompt";

const MyPWAPrompt = () => {
	return (
		<PWAPrompt
			timesToShow={2}
			promptOnVisit={1}
			delay={3500}
			copyTitle="Føj til hjemmeskærm"
			copyBody="Tilføj applikationen til din hjemmeskærm, og få vist den i fuldskærms-mode."
			copyShareButtonLabel="Tryk på 'Del'-knappen i menuen for neden."
			copyAddHomeButtonLabel="Vælg 'Føj til hjemmeskærm'"
		/>
	);
};

export default MyPWAPrompt;
