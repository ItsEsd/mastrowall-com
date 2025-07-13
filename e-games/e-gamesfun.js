function getCookie() {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const cookie = ca[i].trim();
    if (
      cookie.startsWith("mwallpswstud=") ||
      cookie.startsWith("mwallpswedud=")
    ) {
      return true;
    }
  }
  return false;
}
if (getCookie() === false) {
  document.body.innerHTML = `
   <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      height: 100%;
      font-family: sans-serif;
      background-color: #f3f4f6;
      color: #111827;
    }
    .dark body {
      background-color: #111827;
      color: #f3f4f6;
    }
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      gap: 1.5rem;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    p {
      font-size: 1.125rem;
      color: #6b7280;
    }
    .button-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    @media (min-width: 640px) {
      .button-group {
        flex-direction: row;
      }
    }
    .btn {
      padding: 0.75rem 2rem;
      font-size: 1.125rem;
      border-radius: 1rem;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s;
    }
    .btn-signin {
      background-color: #ffffff;
      color: #111827;
    }
    .btn-signin:hover {
      background-color:#e1e1e1;
    }
    .btn-register {
      background-color: #000000;
      color: #ffffff;
    }
    .btn-register:hover {
      background-color: #1f2937;
    }
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      display: none;
      justify-content: center;
      align-items: center;
    }
    .overlay-content {
      background: white;
      color: #111827;
      padding: 4rem;
      border-radius: 1rem;
      text-align: center;
      width: 90%;
      max-width: 500px;
      position: relative;
    }
    .close-btnnw {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color:#222;
    }
    .signin-options {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
  <div class="container">
  <img src="e-games.svg" style="width:100px;margin-left:10px;">
    <h2>Welcome to E-Games</h2>
    <p>MASTROWALL | An Art of Learning</p>
    <div class="button-group">
      <button class="btn btn-signin" onclick="openSignInOverlay()">Sign In</button>
      <button class="btn btn-register" onclick="window.open('https://e-enroll.mastrowall.com','_blank')">Register</button>
    </div>
  </div>

  <div class="overlay" id="signinOverlay">
    <div class="overlay-content">
      <button class="close-btnnw" onclick="closeSignInOverlay()">&times;</button>
      <h2>Sign In As</h2>
      <div class="signin-options">
        <button class="btn btn-signin" onclick="window.open('https://educator.mastrowall.com','_blank')">Educator</button>
        <button class="btn btn-signin" onclick="window.open('https://student.mastrowall.com','_blank')">Student</button>
      </div>
    </div>
  </div>
  `;
}
function openSignInOverlay() {
  document.getElementById("signinOverlay").style.display = "flex";
}
function closeSignInOverlay() {
  document.getElementById("signinOverlay").style.display = "none";
}

const gmdsh = [
  [
    "../images/gaming/gm1.png",
    "https://testtubegames.com/velocityraptor.html",
    "Velocity Raptor",
    "Physics platformer with relativity.",
  ],
  [
    "../images/gaming/gm2.png",
    "https://testtubegames.com/shocktopus_web.html",
    "Electric Shocktopus",
    "Learn magnetism in action.",
  ],
  [
    "../images/gaming/gm3.png",
    "https://www.funbrain.com/games/",
    "FunBrain",
    "Math and reading fun games.",
  ],
  [
    "../images/gaming/chess.png",
    "/e-games/stockfish-chess-web-gui-master/index.html",
    "Chess",
    "Classic strategy game.",
  ],
  [
    "../images/gaming/sudoku-icon.png",
    "/e-games/web-sudoku-puzzle/index.html",
    "Sudoku",
    "Logic-based number puzzle.",
  ],
  [
    "../images/gaming/gm5.png",
    "https://littlealchemy2.com/",
    "Little Alchemy 2",
    "Mix elements and discover new ones.",
  ],
  [
    "../images/gaming/gm7.png",
    "https://kids.nationalgeographic.com/games/",
    "Nat Geo Kids",
    "Explore nature and animals.",
  ],
  [
    "../images/gaming/gm6.png",
    "https://www.roythezebra.com/english-ks1",
    "Roy the Zebra",
    "Literacy and reading games.",
  ],
  [
    "../images/gaming/gm8.png",
    "https://www.roomrecess.com/",
    "Room Recess",
    "Math and logic mini games.",
  ],
  [
    "../images/gaming/gm9.gif",
    "https://toytheater.com/",
    "Toy Theater",
    "Creative and educational games.",
  ],
  [
    "../images/gaming/gm10.png",
    "https://draw.tate.org.uk/",
    "Tate Draw",
    "Create digital art.",
  ],
  [
    "../images/gaming/gm11.png",
    "https://www.turtlediary.com/",
    "Turtle Diary",
    "K-5 learning games.",
  ],
  [
    "../images/gaming/gm15.png",
    "https://www.physicsgames.net/",
    "Physics Games",
    "Learn science through play.",
  ],
  [
    "../images/gaming/gm16.png",
    "https://kids.niehs.nih.gov/games/",
    "NIH Kids",
    "Health and science games.",
  ],
  [
    "../images/gaming/gm18.png",
    "https://mathworld.wolfram.com/",
    "MathWorld",
    "Explore math concepts.",
  ],
  [
    "../images/gaming/gm20.png",
    "https://www.mathnook.com/math/boatcoordinates.html",
    "Boat Coordinates",
    "Coordinate plotting practice.",
  ],

  [
    "../images/gaming/gm24.png",
    "https://www.sheppardsoftware.com/math.htm",
    "Sheppard Software",
    "Fun Kids Online Math Games.",
  ],
  [
    "../images/gaming/gm25.png",
    "https://kids.poki.com/",
    "POKI Kids",
    "Online Kids Games.",
  ],
  [
    "../images/gaming/gm27.png",
    "https://kidmons.com/",
    "KidMONS",
    "Free games for kids.",
  ],
  [
    "../images/gaming/gm28.png",
    "https://www.cbeebies.com/",
    "CBeebies",
    "BBC: Enjoy Games, Activities, and more.",
  ],
  [
    "../images/gaming/gm29.png",
    "https://www.primarygames.com/all_games_a-z/",
    "Primary Games",
    "All game A - Z.",
  ],
  ["../images/gaming/gm30.png", "pacman/", "PAC-MAN", "Play Pac-Man."],
  [
    "../images/gaming/gm19.png",
    "https://www.thatquiz.org/",
    "ThatQuiz",
    "Test knowledge with quizzes.",
  ],
  [
    "../images/gaming/gm22.png",
    "https://freeonlinequizzes.com/",
    "Online Quizzes",
    "Play and learn.",
  ],
  [
    "../images/gaming/stellarium.org.png",
    "https://stellarium-web.org/",
    "Stellarium",
    "Explore the night sky.",
  ],
];

let currentGameIndex = -1; // currently open game index

$(document).ready(function () {
  gmdsh.forEach((gm, index) => {
    $("#gmicon").append(`
      <div class="game-card" id="gmcard-${index}" onclick="goplgm(${index})">
        <img src="${gm[0]}" alt="${gm[2]}" onerror="this.src='../images/imgonerror.svg'" />
        <div class="info">
          <h3>${gm[2]}</h3>
          <p>${gm[3]}</p>
        </div>
      </div>
    `);
  });
});

let pendingGameIndex = -1;

function goplgm(index) {
  const iframe = document.getElementById("opgm");
  const fullscreen = document.getElementById("gmfullscreen");

  if (index === currentGameIndex) {
    if (fullscreen.style.display === "none") {
      fullscreen.style.display = "block"; // reopen same game
    }
    return;
  }

  if (currentGameIndex !== -1) {
    pendingGameIndex = index; // store target
    showConfirmModal(); // ask before switching
    return;
  }

  openGame(index); // directly open if no game active
}

function openGame(index) {
  const iframe = document.getElementById("opgm");
  const fullscreen = document.getElementById("gmfullscreen");

  iframe.src = gmdsh[index][1];
  iframe.style.backgroundImage = "url('/images/loading-gif.gif')";

  if (gmdsh[index][1].includes("toytheater")) {
    iframe.style.backgroundColor = "white";
    iframe.style.backgroundImage = "none";
  } else {
    iframe.style.backgroundColor = "#161616be";
  }

  fullscreen.style.display = "block";

  if (currentGameIndex !== -1) {
    document
      .getElementById(`gmcard-${currentGameIndex}`)
      .classList.remove("active-game");
  }

  document.getElementById(`gmcard-${index}`).classList.add("active-game");
  currentGameIndex = index;
}

function openinnewtab() {
  const iframe = document.getElementById("opgm");
  const framesrc = iframe.src;
  window.open(framesrc, "_blank");
}

function closeIframe() {
  // Just hide iframe — no confirm, no reset
  document.getElementById("gmfullscreen").style.display = "none";
}

function showConfirmModal() {
  document.getElementById("confirmModal").style.display = "block";
}

function hideConfirmModal() {
  document.getElementById("confirmModal").style.display = "none";
}

// Attach button events after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("modalYes").onclick = function () {
    hideConfirmModal();
    if (pendingGameIndex !== -1) {
      openGame(pendingGameIndex);
      pendingGameIndex = -1;
    }
  };

  document.getElementById("modalNo").onclick = function () {
    hideConfirmModal();
    pendingGameIndex = -1;
  };
});
