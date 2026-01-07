// ==========================
// SCRIPT PRINCIPAL DO SITE
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  // === ELEMENTOS PRINCIPAIS ===
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const cardsPage = document.getElementById("cards-page");
  const videoPage = document.getElementById("video-page");
  const music = document.getElementById("music");
  const video = document.getElementById("video");
  const cardImage = document.getElementById("cardImage");

  // === CARDS ===
  const cards = [
    "assets/images/card1.jpeg",
    "assets/images/card2.jpeg",
    "assets/images/card3.jpeg",
    "assets/images/card4.jpeg",
    "assets/images/card5.jpeg",
    "assets/images/card6.jpeg",
    "assets/images/card7.jpeg",
  ];
  let currentCard = 0;

  // ==========================
  // FUNÇÃO INICIAR SITE (EXPOSTA AO HTML)
  // ==========================
  window.startSite = () => {
  intro.style.display = "none";
  site.style.display = "block";
  cardsPage.style.display = "block";

  // FORÇA a música a tocar no clique
  music.currentTime = 0;
  music.volume = 1;
  music.loop = true;
  music.play();

  showCard(0);
};

  // ==========================
  // MOSTRAR CARD
  // ==========================
  window.showCard = (index) => {
    if (index < 0 || index >= cards.length) return;
    currentCard = index;
    cardImage.src = cards[currentCard];
  };

  // ==========================
  // PRÓXIMO CARD
  // ==========================
  window.nextCard = () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  };

  // ==========================
  // IR PARA VÍDEO
  // ==========================
  window.goToVideo = () => {
    if (!music.paused) music.pause();

    cardsPage.style.display = "none";
    videoPage.style.display = "block";

    video.play().catch(() => {});
  };

  // ==========================
  // TIMER / CONTAGEM REGRESSIVA
  // ==========================
  const targetDate = new Date("2026-02-02T00:00:00");
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        countdownEl.innerText = "Chegou o nosso dia 🤍";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdownEl.innerText =
        `Eu só sou completo com você 🤍\n${days} dias ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  // ==========================
  // INICIALIZAÇÃO
  // ==========================
  site.style.display = "none";
  videoPage.style.display = "none";
});



