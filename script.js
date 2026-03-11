// --- JS LOGIC: SATRIA & AYU ---

// 1. Countdown Jadian (1 Nov 2025)
const start = new Date("November 1, 2025 00:00:00").getTime();

function updateDays() {
    const now = new Date().getTime();
    const diff = now - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " Hari Bersama";
}
setInterval(updateDays, 1000); 
updateDays();

// 2. Vinyl Music Player
const audio = document.getElementById('audio-player');
const vinyl = document.getElementById('vinyl-disc');

function playMusic(url, title) {
    audio.src = url; 
    audio.play();
    document.getElementById('current-title').innerText = "Now Playing: " + title;
    vinyl.classList.add('playing');
}

audio.onpause = () => vinyl.classList.remove('playing');
audio.onplay = () => vinyl.classList.add('playing');
audio.onended = () => vinyl.classList.remove('playing');

// 3. Virtual Pet SatYu (Interaksi Kucing)
const pet = document.getElementById('pet-character');
const petStatus = document.getElementById('pet-status');
const fe = document.getElementById('floating-emoji');

function showEmoji(emoji) {
    fe.innerText = emoji; 
    fe.style.animation = 'none';
    fe.offsetHeight; // trigger reflow
    fe.style.animation = 'floatUp 1s ease-out';
}

function feedPet() {
    pet.classList.add('cat-eat');
    petStatus.innerText = "SatYu: Nyam nyam.. Enak Banget! 🐟";
    showEmoji("🍱");
    setTimeout(() => pet.classList.remove('cat-eat'), 1500);
}

function playPet() {
    petStatus.innerText = "SatYu: Purrr.. Sayang Satria & Ayu! ❤️";
    showEmoji("💖");
    pet.style.transform = "scale(1.2)";
    setTimeout(() => pet.style.transform = "scale(1)", 300);
}

function petCare() {
    const responses = [
        "Meow! 🐾", 
        "Minta ikan dong.. 🐟", 
        "Ayu cantik banget hari ini! ✨", 
        "Sayang kalian berdua! ❤️",
        "Satria ganteng deh! 😎"
    ];
    const randomRes = responses[Math.floor(Math.random() * responses.length)];
    petStatus.innerText = "SatYu: " + randomRes;
    showEmoji("☁️");
}

// 4. Love Calculator dengan Confetti
function calculateLove() {
    document.getElementById('calc-display').value = "Love 1000000%";
    
    // Suntikan Efek Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff1744', '#f48fb1', '#ffffff']
    });

    setTimeout(() => {
        alert("Cinta Satria ke Ayu gak ada batasnya! ❤️");
    }, 500);
}

// 5. Toggle Pesan Rahasia
function toggleSecret() {
    const content = document.getElementById('secret-content');
    if (content.style.display === "none") {
        content.style.display = "block";
        content.scrollIntoView({ behavior: 'smooth' });
    } else {
        content.style.display = "none";
    }
}
