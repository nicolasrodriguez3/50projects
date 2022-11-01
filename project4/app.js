const d = document,
	$main = d.getElementById("main"),
	$input = d.getElementById("input"),
	$btn = d.getElementById("button")

// $btn.addEventListener("click", () => {
// 	if($main.classList.contains("active")){
// 		$main.classList.remove("active")
// 	}else{
// 		$main.classList.add("active")
// 		$input.focus()
// 	}
// })

// agregando funcionalidad para cerrar el input al cliquear en cualquier parte del documento
d.addEventListener("click", (e) => {
	if (e.target.matches("#button") || e.target.matches(".fa-search")) {
		if ($main.classList.contains("active")) {
			$main.classList.remove("active")
		} else {
			$main.classList.add("active")
			$input.focus()
		}
	} else if (!e.target.matches("#input") && $main.classList.contains("active")) {
		$main.classList.remove("active")
	}
})
