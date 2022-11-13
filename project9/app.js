const $container = document.querySelector(".container")

const aplausos = new Audio("./audio/applause.mp3"),
	boo = new Audio("./audio/boo.mp3"),
	gasp = new Audio("./audio/gasp.mp3"),
	tada = new Audio("./audio/tada.mp3"),
	victory = new Audio("./audio/victory.mp3"),
	wrong = new Audio("./audio/wrong.mp3")

const audios = [
	{ name: "Aplausos", audio: aplausos },
	{ name: "Boo", audio: boo },
	{ name: "Gasp", audio: gasp },
	{ name: "Tada", audio: tada },
	{ name: "Victoria", audio: victory },
	{ name: "Error", audio: wrong },
]

audios.forEach(({name, audio}) => {
	const button = document.createElement("button")
	button.className = "btn"
	button.addEventListener("click", () => {
		stopAudio(audio)
		audio.play()
	})
	button.innerText = name

	$container.appendChild(button)
})

function stopAudio(audio) {
	audio.pause();
	audio.currentTime = 0;
}