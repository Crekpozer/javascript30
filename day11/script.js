
const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelector('[data-skipe]')
const ranges = document.querySelector('.player__slider')

function togglePlay(){
    if(video.paused){
        video.play()
    } else [
        video.pause()
    ]
}