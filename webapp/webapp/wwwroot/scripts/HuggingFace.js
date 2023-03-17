window.dotNetToJsSamples = {
	getValue: async function query(node) {
		const data = fs.readFileSync(node);
		const response = await fetch(
			"https://api-inference.huggingface.co/models/harshit345/xlsr-wav2vec-speech-emotion-recognition",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: data,
			}
		);
		const node.value = await response.json();
	return node.value;
}
};
