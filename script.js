// script.js

const animatedText = document.getElementById("animatedText");
const playBtn = document.getElementById("playMusic");
const nextBtn = document.getElementById("nextSlide");
const music = document.getElementById("backgroundMusic");
const flowerContainer = document.querySelector(".flowers-container");

const message = "Selamat Datang di Halaman Kami!";
let delay = 100;

// Create animated letters
message.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  animatedText.appendChild(span);
  setTimeout(() => {
    span.classList.add("visible");
  }, delay * index);
});

// Music button handler
playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "Pause Music";
  } else {
    music.pause();
    playBtn.textContent = "Play Music";
  }
});

// Scroll to next slide
nextBtn.addEventListener("click", () => {
  document.querySelector(".slide2").scrollIntoView({ behavior: "smooth" });
});

// Generate flowers
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * 100 + "%";
  flower.style.animationDuration = 4 + Math.random() * 3 + "s";
  flower.style.transform = `scale(${0.8 + Math.random() * 0.6})`;
  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 7000);
}

setInterval(createFlower, 800);

// Trigger text animation on reload
window.addEventListener("load", () => {
  document.querySelectorAll("#animatedText span").forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("visible");
    }, i * delay);
  });
});
