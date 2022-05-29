/* let video = document.getElementById('video') */
let video = document.querySelector('#video')
let btn_rep = document.querySelector('#reproducir')

function reproducir() {
    if(video.paused) {
        video.play();//Método play
        btn_rep.innerHTML = '<img src="image/pausa.png">'
    } else {
        video.pause()//Método pausa
        btn_rep.innerHTML = '<img src="image/play.png">'
    }
}

function detener() {
    video.pause()
    video.currentTime = 0//Línea de tiempo del video
    btn_rep.innerHTML = '<img src="image/play.png">'
}

function saltar(fotograma) {
    video.currentTime += fotograma //Va sumando fotogramas
}
