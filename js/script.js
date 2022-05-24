const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')

const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')
const mute = videoPlayer.querySelector('.mute')
const fullscreen = videoPlayer.querySelector('.fullscreen')

// play and pause

playButton.addEventListener('click', (e) => {
	if (video.paused) {
		video.play()
		e.target.src = './assets/svg/pause.svg'
	} else {
		video.pause()
		e.target.src = './assets/svg/play.svg'
	}
})
//volume
volume.addEventListener('mousemove', (e) => {
	video.volume = e.target.value
})

//current time and duration
const currentTime = () => {
	let currentMinutes = Math.floor(video.currentTime / 60)
	let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
	let durationMinutes = Math.floor(video.duration / 60)
	let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

	currentTimeElement.innerHTML = `${currentMinutes}:${
		currentSeconds < 10 ? '0' + currentSeconds : currentSeconds
	}`
	durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)

//progress bar

video.addEventListener('timeupdate', () => {
	const percentage = (video.currentTime / video.duration) * 100
	progressBar.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) => {
	const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
	video.currentTime = progressTime
})

//mute

mute.addEventListener('click', (e) => {
	video.muted = !video.muted
	mute.classList.toggle('muted')
})

//volume 0 change icon
volume.addEventListener('input', () => {
	if (volume.value == 0) {
		mute.classList.add('muted')
	} else {
		mute.classList.remove('muted')
	}
})

//fullscreen
fullscreen.addEventListener('click', () => {
	video.requestFullscreen()
})

console.log('Ваша отметка - 55 балла(ов)')
console.log('Не выполненные/не засчитанные пункты:')
console.log(
	'1) есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления'
)
console.log(
	'2) когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается'
)
console.log('Частично выполненные пункты:')
console.log(
	'1) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения — 5 балл(а)'
)
console.log('Все оставшиеся пункты выполнены')

