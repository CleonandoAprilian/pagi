document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const backgroundMusic = document.getElementById("background-music");
  const greetingEl = document.getElementById("greeting");
  const messageEl = document.getElementById("message");
  const cardEl = document.querySelector(".card");

  // Elemen pop-up
  const playMusicAndCloseBtn = document.getElementById("playMusicAndCloseBtn");
  const overlay = document.getElementById("overlay");

  const messages = [
    {
      greeting: "Selamat Pagi, Cintaku!",
      message: "Matahari mungkin terbit di timur, tapi duniaku terbit saat melihat senyummu. Semoga harimu secerah hatiku untukmu.",
    },
    {
      greeting: "Pagi, Sayangku ❤️",
      message: "Hari-harimu mungkin penuh tantangan, tapi ingatlah aku selalu ada untukmu, jangan menyerah ya!!",
    },
    {
      greeting: "Semangatt Sayanggg!!",
      message: "Harimu mungkin tidak selalu menyenangkan, aku tunggu keluh kesahmu, tetap semangatt ya!!.",
    },
    {
      greeting: "IHH KANGENNNNN",
      message: "kali ini gx ada semangatt, akunya butuh disemangattin, kangen kamuuu.",
    },
  ];

  let currentIndex = 0;

  // Event listener untuk tombol Ganti Pesan
  nextBtn.addEventListener("click", () => {
    cardEl.classList.add("fade-out-in");
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      greetingEl.textContent = messages[currentIndex].greeting;
      messageEl.textContent = messages[currentIndex].message;
      cardEl.classList.remove("fade-out-in");
    }, 750);
  });

  // Event listener untuk tombol di pop-up
  playMusicAndCloseBtn.addEventListener("click", () => {
    backgroundMusic.play();
    overlay.style.display = "none"; // Sembunyikan overlay dan pop-up
  });
});
