const d = document,
	$main = d.getElementById("main"),
	$input = d.getElementById("input"),
	$btn = d.getElementById("button")

$btn.addEventListener("click", () => {
	if($main.classList.contains("active")){
		$main.classList.remove("active")
	}else{
		$main.classList.add("active")
		$input.focus()
	}
})
