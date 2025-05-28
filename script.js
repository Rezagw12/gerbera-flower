const animatedText = document.getElementById("animatedText");
const playBtn = document.getElementById("playMusic");
const nextBtn = document.getElementById("nextSlide");
const music = document.getElementById("backgroundMusic");
const flowerContainer = document.querySelector(".flowers-container");

const message = "Selamat Datang di Halaman Kami!";
const delay = 100;

// Buat animasi teks per huruf dengan efek neon blink
message.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.2}s`;  // stagger neon blink effect
  animatedText.appendChild(span);
  setTimeout(() => {
    span.classList.add("visible");
  }, delay * index);
});

// Toggle musik play/pause & update tombol
playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "Pause Music";
  } else {
    music.pause();
    playBtn.textContent = "Play Music";
  }
});

// Scroll ke slide kedua
nextBtn.addEventListener("click", () => {
  document.querySelector(".slide2").scrollIntoView({ behavior: "smooth" });
});

// Buat bunga muncul sebagai lingkaran warna-warni dengan gerakan naik, goyang, dan putar
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = Math.random() * 100 + "%";
  flower.style.animationDuration = 4 + Math.random() * 3 + "s";
  flower.style.transform = `scale(${0.8 + Math.random() * 0.6})`;

  // warna acak
  flower.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;

  // animasi rotasi dan goyang dengan delay random agar tidak seragam
  flower.style.animationName = "floatUp";
  flower.style.animationTimingFunction = "ease-in";
  flower.style.animationFillMode = "forwards";
  flower.style.animationIterationCount = "1";
  flower.style.animationDelay = `${Math.random() * 3}s`;

  flowerContainer.appendChild(flower);

  // Hapus bunga setelah animasi selesai
  setTimeout(() => {
    flower.remove();
  }, 7000);
}

// Interval bunga muncul tiap 0.5 detik
setInterval(createFlower, 500);

// Animasi teks ulang saat reload
window.addEventListener("load", () => {
  document.querySelectorAll("#animatedText span").forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("visible");
    }, i * delay);
  });
});
