document.querySelectorAll('.mini-player').forEach(player => {
    const audio = player.querySelector('.mini-audio');
    const progresso = player.querySelector('.mini-progresso');
    const playPause = player.querySelector('.mini-playPause');
    const current = player.querySelector('.mini-current');
    const duration = player.querySelector('.mini-duration');

    audio.addEventListener('loadedmetadata', () => {
        progresso.max = audio.duration;
        duration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        progresso.value = audio.currentTime;
        current.textContent = formatTime(audio.currentTime);
    });

    progresso.addEventListener('input', () => {
        audio.currentTime = progresso.value;
    });

    playPause.addEventListener('click', () => {
        if (audio.paused) {
            // Pausa todos os outros áudios
            document.querySelectorAll('.mini-audio').forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.parentElement.querySelector('.mini-playPause').innerHTML = '<i class="bi bi-play-fill"></i>';
                }
            });
            audio.play();
            playPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
        } else {
            audio.pause();
            playPause.innerHTML = '<i class="bi bi-play-fill"></i>';
        }
    });

    audio.addEventListener('ended', () => {
        playPause.innerHTML = '<i class="bi bi-play-fill"></i>';
    });
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

// Proposal buttons functionality
document.querySelector('.yes-button').addEventListener('click', function () {
    alert("Yay! She said yes!");
});

document.querySelector('.no-button').addEventListener('click', function () {
    alert("Oh no! Let's try again later.");
});

