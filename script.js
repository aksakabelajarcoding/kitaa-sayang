// Countdown Jadian (1 Nov 2025)
const anniversaryDate = new Date("November 1, 2025 00:00:00").getTime();

function updateDays() {
    const now = new Date().getTime();
    const diff = now - anniversaryDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " Hari Bersama";
}
setInterval(updateDays, 1000);
updateDays();

// Musik Logic
const audio = document.getElementById('audio-player');
const cassette = document.getElementById('cassette');
const titleLabel = document.getElementById('current-title');

function playMusic(url, title) {
    audio.src = url;
    audio.play();
    titleLabel.innerText = title;
}

audio.onplay = () => cassette.classList.add('playing');
audio.onpause = () => cassette.classList.remove('playing');
audio.onended = () => cassette.classList.remove('playing');

// Love Calculator Simple
function calculateLove() {
    const display = document.getElementById('calc-display');
    display.value = "Love 1000000%";
    alert("Cintanya Satria ke Ayu gak terhingga! ❤️");
}
