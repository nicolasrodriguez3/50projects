const $textarea = document.getElementById("choices"),
	$results = document.getElementById("results")

$textarea.focus()
$textarea.addEventListener("input", (e) => {
	const text = $textarea.value
	const words = text.split(",")
	if (e.inputType === "insertLineBreak") {
		pickRandomElement(words)
		$textarea.value = ""
	} else {
		$results.innerHTML = ""
		$results.appendChild(generateList(words))
	}
})

const generateList = (list) => {
	const fragment = document.createDocumentFragment()

	list.map((item) => {
		if (item.trim() === "") return
		const $span = document.createElement("span")
		$span.classList.add("choice")
		$span.innerText = item.trim()

		fragment.appendChild($span)
	})

	return fragment
}

const pickRandomElement = () => {
	const list = $results.childNodes
	let selectedElement = null
	for (let i = 0; i < 30; i++) {
		setTimeout(() => {
			list.forEach((element) => element.classList.remove("selected"))
			selectedElement = list[Math.floor(Math.random() * list.length)]
			selectedElement.classList.add("selected")
		}, 100 * i)
	}
}
