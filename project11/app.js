const $container = document.querySelector(".container")
let interval

document.addEventListener("keydown", (e) => {
	if(interval) clearInterval(interval)
	$container.innerHTML = `
	<div class="key">${e.key === " " ? "Space" : e.key}<small>event.key</small></div>
	<div class="key">${e.keyCode}<small>event.keyCode</small></div>
	<div class="key">${e.code}<small>event.code</small></div>
	<div class="progress"><div></div></div>
	`
	const $progress = document.querySelector(".progress>div")
	$progress.style.width = `100%`

  interval = setInterval(() => {
    const width = parseInt($progress.style.width)
		console.log(width)
    $progress.style.width = `${width - 1}%`

    if (width <= 0) {
      clearInterval(interval)
			$container.innerHTML = `<div class="key">Press any key to get the keyCode</div>`
    }

  }, 50)
})

