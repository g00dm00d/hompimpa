scorePlayer = 0;
scoreCom = 0;

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

function getPilihanComputer2() {
  if (pilihanPlayer == "gajah") {
    return "semut";
  } else if (pilihanPlayer == "semut") {
    return "orang";
  } else {
    return "gajah";
  }
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function putar() {
  const gambarComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    gambarComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    if (scorePlayer <= 8) {
      pilihanComputer = getPilihanComputer();
      pilihanPlayer = pil.classList[0];
      hasil = getHasil(pilihanComputer, pilihanPlayer);
    } else if (scoreCom >= 14 && scoreCom <= 20) {
      pilihanComputer = getPilihanComputer();
      pilihanPlayer = pil.classList[0];
      hasil = getHasil(pilihanComputer, pilihanPlayer);
    } else {
      pilihanPlayer = pil.classList[0];
      pilihanComputer = getPilihanComputer2();
      hasil = getHasil(pilihanComputer, pilihanPlayer);
    }

    if (hasil == "MENANG!") {
      scorePlayer = scorePlayer + 1;
    }
    if (hasil == "KALAH!") {
      scoreCom = scoreCom + 1;
    }
    putar();
    setTimeout(function () {
      const gambarComputer = document.querySelector(".img-computer");
      const bScoreCom = document.querySelector(".score-com");
      const bScorePlayer = document.querySelector(".score-player");
      bScoreCom.innerHTML = scoreCom;
      bScorePlayer.innerHTML = scorePlayer;
      gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.classList[0];
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.classList[0];
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.classList[0];
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
