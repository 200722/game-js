let elementtimer = document.getElementById("timer");
let elementkeuzeSpeler1 = document.getElementById("keuzeSpeler1");
let elementkeuzeSpeler2 = document.getElementById("keuzeSpeler2");
let elementwinner = document.getElementById("winner");

elementtimer.innerHTML = 0;
elementkeuzeSpeler1.innerHTML = "-";
elementkeuzeSpeler2.innerHTML = "-";
elementwinner.innerHTML = "Als je mag beginnen, dan klick bij spatie ";
elementwinner.style.color = "red";
elementwinner.style.fontSize = "larger";

let keuzeSpeler1 = "";
let keuzeSpeler2 = "";
let timer = 5;
let jeMagNuKlikken = false;

function winner() {
  if (keuzeSpeler1 == "" && keuzeSpeler2 == "") {
    return "gelijkspel";
  }

  if (keuzeSpeler1 == "") {
    return "winner speler2";
  }
  if (keuzeSpeler2 == "") {
    return "winner speler1";
  }

  if (keuzeSpeler1 == "1" && keuzeSpeler2 == "8") {
    return "gelijkspel";
  }
  if (keuzeSpeler1 == "1" && keuzeSpeler2 == "9") {
    return "winner speler 2";
  }
  if (keuzeSpeler1 == "1" && keuzeSpeler2 == "0") {
    return "winner speler 1";
  }
  if (keuzeSpeler1 == "2" && keuzeSpeler2 == "8") {
    return "winner speler 1";
  }
  if (keuzeSpeler1 == "2" && keuzeSpeler2 == "9") {
    return "gelijkspel";
  }
  if (keuzeSpeler1 == "2" && keuzeSpeler2 == "0") {
    return "winner speler 2";
  }
  if (keuzeSpeler1 == "3" && keuzeSpeler2 == "8") {
    return "winner speler 2";
  }
  if (keuzeSpeler1 == "3" && keuzeSpeler2 == "9") {
    return "winner speler 1";
  }
  if (keuzeSpeler1 == "3" && keuzeSpeler2 == "0") {
    return "gelijkspel";
  }
}

function countDown() {
  jeMagNuKlikken = false;
  if (timer == 0) {
    gameStart();
  } else {
    timer = timer - 1;
    elementtimer.innerHTML = timer;
    setTimeout(countDown, 500);
  }
}
function gameStart() {
  jeMagNuKlikken = true;
  timer = 10;
  elementwinner.innerHTML = "spel is begonnen";
  gameCountDown();
}
function gameCountDown() {
  if (timer == 0) {
    jeMagNuKlikken = false;
    elementwinner.innerHTML = winner();
    elementkeuzeSpeler1.innerHTML = keuzeSpeler1;
    elementkeuzeSpeler2.innerHTML = keuzeSpeler2;
  } else {
    timer = timer - 1;
    elementtimer.innerHTML = timer;
    setTimeout(gameCountDown, 500);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    countDown();
  }

  if (jeMagNuKlikken == true) {
    if (event.key === "1") {
      keuzeSpeler1 = "1";
    }
    if (event.key === "2") {
      keuzeSpeler1 = "2";
    }
    if (event.key === "3") {
      keuzeSpeler1 = "3";
    }
    if (event.key === "8") {
      keuzeSpeler2 = "8";
    }
    if (event.key === "9") {
      keuzeSpeler2 = "9";
    }
    if (event.key === "0") {
      keuzeSpeler2 = "0";
    }
  }
});
