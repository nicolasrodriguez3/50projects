const $container = document.querySelector(".container"),
	finishedProjects = ["Expanding cards", "Progress steps", "Rotating navigation", "Hidden Search", "Blurry Loading", "Scroll Animation","Split Landing Page","Form Wave", "Sound Board", "Dad Jokes", "Event KeyCodes", "FAQ Collapse", "Random Choice Picker", "Animated Navigation"]

	finishedProjects.forEach((x,i)=>{
	const a = document.createElement("a"),
		img = document.createElement("img"),
		h2 = document.createElement("h2")

	a.classList.add("card")
	a.href = `./project${i+1}/index.html`
	img.src = `./project${i+1}/capture.gif`
	img.alt = finishedProjects[i]
	h2.innerText = finishedProjects[i]
	a.appendChild(img)
	a.appendChild(h2)

	$container.appendChild(a)
})