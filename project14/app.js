const $btn = document.querySelector(".btn"),
	$nav = document.querySelector(".links")

$btn.addEventListener("click", () => {
	$nav.classList.toggle("active")
})