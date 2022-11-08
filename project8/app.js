const $inputs = document.querySelectorAll(".form-row>input"),
	$form = document.querySelector("form")

$inputs.forEach((input) => {
	[...input.labels[0].children].forEach((letter, i) => {
			letter.setAttribute("style", `transition-delay: ${50 * i}ms`)
		})
	
})

$form.addEventListener("submit", (e) => {
	e.preventDefault()
})
