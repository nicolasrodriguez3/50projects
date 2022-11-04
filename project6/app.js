const cards = document.querySelectorAll(".card")

const showCard = () => {
	const nintyPorcentOfScreen = window.innerHeight * 0.9

	cards.forEach(box => {
		const boxTop = box.getBoundingClientRect().top
		if (boxTop < nintyPorcentOfScreen) {
			box.classList.add("show")
		} else {
			box.classList.remove("show")
		}
	})
}
showCard()
document.addEventListener("scroll", showCard)
