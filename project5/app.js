const $bg = document.getElementById("bg"),
	$progress = document.getElementById("progress")

let progress = 0
const blurring = () => {
	progress += 1

	if (progress >= 100) {
		clearInterval(timer)
		return
	}

	$bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`
	$progress.innerText = `${progress}%`
	$progress.style.opacity = `${(100 - progress) / 100}`
}

const timer = setInterval(blurring, 10)

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
