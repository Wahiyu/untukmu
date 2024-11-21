// Elements
const startButton = document.getElementById("startButton");
const finalPrompt = document.getElementById("finalPrompt");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Gombalan array
const gombalanList = [
  "Kamu tahu nggak? Aku nggak butuh GPS, karena jalanku selalu ke kamu.",
  "Aku mau kasih tahu, kamu itu bukan cuma mimpi, tapi kenyataan yang indah.",
  "Sejak kenal kamu, aku jadi lupa gimana rasanya sedih.",
  "Kalau cinta itu seni, kamu adalah masterpiece-nya.",
  "Kamu itu seperti gravitasi, selalu menarik hatiku ke arahmu.",
  "Kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
  "Enak ya jadi kamu, kalau mau lihat bidadari tinggal lihat di kaca.",
  "ika kamu berdiri di depan cermin memegang 11 mawar, kamu akan melihat 12 bunga tercantik yang pernah ada.",
  "Tahu gak kenapa kita Cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
  "Pikiranku bekerja sangat luar biasa 365 hari setahun, 7 hari seminggu dan 24 jam sehari sampai aku bertemu denganmu.",
  "Panda apa yang bikin seneng? Pandangin kamu setiap hari.",
];

// Index for tracking gombalan
let index = 0;

// Start gombalan
startButton.addEventListener("click", () => {
  if (index < gombalanList.length) {
    alert(gombalanList[index]);
    index++;
  } else {
    startButton.classList.add("hidden");
    finalPrompt.classList.remove("hidden");
  }
});

// Random position for "Tidak" button (Tetap terlihat)
function randomizeNoButtonPosition() {
  const containerWidth = window.innerWidth - noButton.offsetWidth - 0; // Adding padding to avoid overflow
  const containerHeight = window.innerHeight - noButton.offsetHeight - 20; // Adding padding to avoid overflow
  const randomX = Math.floor(Math.random() * containerWidth);
  const randomY = Math.floor(Math.random() * containerHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Set interval to move the "Tidak" button every second
setInterval(randomizeNoButtonPosition, 1000); // Move every 1 second

// Yes Button Click
yesButton.addEventListener("click", () => {
  alert("Aku juga sayang kamu! ❤️");
});

// No Button Click
noButton.addEventListener("click", () => {
  alert("Mau kabur ya? Hihi!");
});

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
