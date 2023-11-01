let scorePlayer = 0;
let scoreCom = 0;
const gambarComputer = document.querySelector(".img-computer");
const info = document.querySelector(".info");
const audio = document.getElementById("myAudio");

function playAudio() {
  if (audio) {
    audio.play();
  }
}

function getPilihanComputer() {
  var comp = Math.random();
  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function putar() {
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1199) {
      clearInterval;
      return;
    }
    gambarComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

function putarHasil() {
  const titik = [".", "..", "..."];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1199) {
      clearInterval;
      return;
    }
    info.innerHTML = titik[i++];
    if (i == titik.length) i = 0;
  }, 170);
}

function updateScore() {
  const bScoreCom = document.querySelector(".score-com");
  const bScorePlayer = document.querySelector(".score-player");
  bScoreCom.innerHTML = scoreCom;
  bScorePlayer.innerHTML = scorePlayer;
}

const pilihan = document.querySelectorAll(".pilihan");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    pil.disabled = true;

    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.dataset.pilihan;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    if (hasil == "MENANG!") scorePlayer++;
    if (hasil == "KALAH!") scoreCom++;

    putar();
    putarHasil();
    setTimeout(function () {
      gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      info.innerHTML = hasil;
      pil.disabled = false;
      updateScore();
    }, 1200);
  });
});
