document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const greetingEl = document.getElementById("greeting");
  const messageEl = document.getElementById("message");
  const cardEl = document.querySelector(".card");

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
      message: "kali ini gx ada kata-kata penyemangatt, soalnya aku juga butuh disemangattin, kangen kamuuu.",
    },
  ];

  let currentIndex = 0;

  nextBtn.addEventListener("click", () => {
    // Tambahkan class untuk animasi
    cardEl.classList.add("fade-out-in");

    // Tunggu hingga animasi selesai, lalu ubah teks
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      greetingEl.textContent = messages[currentIndex].greeting;
      messageEl.textContent = messages[currentIndex].message;

      // Hapus class setelah animasi selesai
      cardEl.classList.remove("fade-out-in");
    }, 750); // Durasi 750ms (setengah dari 1.5s di CSS)
  });
});

