const $container = document.querySelector(".joke"),
	$btn = document.querySelector(".btn")

const	url = "https://icanhazdadjoke.com/"

const fetchJoke = async () => {
	const res = await fetch(url, {
		headers: {
			Accept: "application/json",
		},
	})
	const data = await res.json()
	return data
}

const getJoke = async () => {
  $container.innerHTML = '<div class="lds-dual-ring"></div>'
	const { joke } = await fetchJoke()
	$container.innerHTML = joke
}

getJoke()
$btn.addEventListener("click", getJoke)