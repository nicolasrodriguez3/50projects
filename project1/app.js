const $main = document.getElementById("main")
const $cards = document.querySelectorAll(".card")

$cards[0].classList.add("active")

$main.addEventListener("click", ({ target }) => {
	if (target.matches(".card")) {
		$cards.forEach((card) => card.classList.remove("active"))
		target.classList.add("active")
	}
})
