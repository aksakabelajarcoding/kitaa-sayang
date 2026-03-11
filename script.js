// --- JS LOGIC: SATRIA & AYU ---

// 1. Countdown Jadian (1 Nov 2025)
const start = new Date("November 1, 2025 00:00:00").getTime();
function updateDays() {
    const diff = new Date().getTime() - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " Hari Bersama";
}
setInterval(updateDays, 1000); updateDays();

// 2. Music Player
const audio = document.getElementById('audio-player');
const vinyl = document.getElementById('vinyl-disc');
function playMusic(url, title) {
    audio.src = url; 
    audio.play();
    document.getElementById('current-title').innerText = "Now Playing: " + title;
}
audio.onplay = () => vinyl.classList.add('playing');
audio.onpause = () => vinyl.classList.remove('playing');

// 3. Pet SatYu Interactive (HIDUP & RESPONSIF)
const cat = document.getElementById('cat-body');
const petArea = document.getElementById('pet-area');
const petStatus = document.getElementById('pet-status');

function showEmoji(emoji) {
    const fe = document.getElementById('floating-emoji');
    fe.innerText = emoji; fe.style.animation = 'none';
    fe.offsetHeight; fe.style.animation = 'floatUp 1s ease-out';
}

// Interaksi saat disentuh (MouseDown)
petArea.addEventListener('mousedown', () => {
    petStatus.innerText = "SatYu: Purrr... Enak banget elusannya! ❤️";
    showEmoji("💖");
});

function feedPet() {
    // Gerakan makan
    cat.style.animation = "breathing 0.2s ease-in-out infinite";
    petStatus.innerText = "SatYu: Nyam nyam.. Enak Banget! 🐟";
    showEmoji("🍱");
    setTimeout(() => { cat.style.animation = "breathing 3s ease-in-out infinite"; }, 1000);
}

function playPet() {
    petStatus.innerText = "SatYu: Yeeay! Lariii.. 🐾";
    showEmoji("✨");
    // Gerakan lari
    cat.style.transform = "translateX(30px)";
    setTimeout(() => { cat.style.transform = "translateX(-30px)"; }, 200);
    setTimeout(() => { cat.style.transform = "translateX(0)"; }, 400);
}

// 4. Love Calculator dengan Confetti
function calculateLove() {
    document.getElementById('calc-display').value = "Love 1000000%";
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff1744', '#f48fb1', '#ffffff'] });
    setTimeout(() => { alert("Sayang makaish sudah nemenin aku setahun ini aku beruntugn kok punya pasangan kayakkk dedeee jangan tinggalkan kakaaa ya! ❤️"); }, 500);
}

function toggleSecret() {
    const c = document.getElementById('secret-content');
    c.style.display = (c.style.display === "none") ? "block" : "none";
}
