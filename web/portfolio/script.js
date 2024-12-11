playPause = document.querySelector("#playPause");

wavesurfer = WaveSurfer.create({
    container: "#wave",
    waveColor: "#1d5171",
    progressColor: [ // the gradient fill styles are also available on the progressColor option
        "#03CAE9",
        "#0b86e3"
    ],
    height: 45,
    barGap: 3,
    barRadius: 6,
    barWidth: 4,
    scrollParent: false
  });

  wavesurfer.load("./mama.mp3");

  playPause.addEventListener("click", function (e) {
    wavesurfer.playPause();
  });

  wavesurfer.on("play", function(e) {
    playPause.classList.remove("fi-rr-play");
    playPause.classList.add("fi-rr-pause");
});

// change pause button 

    wavesurfer.on("pause", function(e) {
    playPause.classList.remove("fi-rr-pause");
    playPause.classList.add("fi-rr-play");
});