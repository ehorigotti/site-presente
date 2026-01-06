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
    "assets/images/card3.jpeg"
  ];
  let currentCard = 0;

  // ==========================
  // FUNÇÃO INICIAR SITE
  // ==========================
  window.startSite = () => {
    // Esconde intro e mostra site/cards
    intro.style.display = "none";
    site.style.display = "block";
    cardsPage.style.display = "block";

    // Tocar música de forma segura
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => console.log("Música tocando"))
        .catch(err => console.log("Erro ao tocar música:", err));
    }

    // Mostrar o primeiro card
    showCard(0);
  };

  // ==========================
  // FUNÇÃO PARA TOCAR MÚSICA (opcional)
  // ==========================
  function playMusic(src, loop = true) {
    music.src = src;
    music.loop = loop;
    music.load();
    music.play().catch(err => console.log("Erro ao tocar música:", err));
  }

  // ==========================
  // FUNÇÃO PARA MOSTRAR UM CARD
  // ==========================
  window.showCard = (index) => {
    if (index < 0 || index >= cards.length) return;
    currentCard = index;
    cardImage.src = cards[currentCard];
  };

  // ==========================
  // FUNÇÃO PARA PRÓXIMO CARD
  // ==========================
  window.nextCard = () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  };

  // ==========================
  // FUNÇÃO PARA IR PARA VÍDEO
  // ==========================
  window.goToVideo = () => {
    // Parar música
    if (!music.paused) music.pause();

    // Esconder cards, mostrar vídeo
    cardsPage.style.display = "none";
    videoPage.style.display = "block";

    // Tocar vídeo
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => console.warn("Erro ao tocar vídeo:", err));
    }
  };

  // ==========================
  // INICIALIZAÇÕES
  // ==========================
  // Site começa escondido
  site.style.display = "none";
  videoPage.style.display = "none";
});
