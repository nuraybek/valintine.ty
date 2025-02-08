function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = Math.random() > 0.5 ? "💌" : "🎀";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh"; 
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

let isPlaying = false;
const audio = document.getElementById("bg-music");

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(error => console.log("Автовоспроизведение заблокировано"));
    }
    isPlaying = !isPlaying;
}
