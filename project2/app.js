const d = document,
	$circle = d.querySelectorAll(".progress-circle"),
	$bar = d.querySelector(".progress-bar")
;($prev = d.querySelector(".prev-btn")), ($next = d.querySelector(".next-btn"))

let step = 1

const handleNext = () => {
	$circle[step].classList.add("active")
	$bar.style.width = `${(step / 3) * 100}%`
	step += 1

	if (step > 3) $next.disabled = true
	if (step > 1) $prev.disabled = false
}
const handlePrev = () => {
	step -= 1
	$bar.style.width = `${((step - 1) / 3) * 100}%`
	$circle[step].classList.remove("active")

	if (step < 4) $next.disabled = false
	if (step === 1) $prev.disabled = true
}

$next.addEventListener("click", handleNext)
$prev.addEventListener("click", handlePrev)
