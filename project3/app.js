const d = document,
	$open = d.getElementById("open"),
	$close = d.getElementById("close"),
	$main = d.getElementById("main")

$open.addEventListener("click", () => {
	$main.classList.add("show-nav")
})
$close.addEventListener("click", () => {
	$main.classList.remove("show-nav")
})