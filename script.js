// 1. Récupération des éléments
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("#buttons button");

// 2. Écoute des clics
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      clearScreen();
    } else if (value === "=") {
      calculate();
    } else {
      updateScreen(value);
    }
  });
});

// === FONCTIONS ===

// Effacer l'écran
function clearScreen() {
  screen.textContent = "0";
}

// Calculer le résultat
function calculate() {
  try {
    let result = eval(screen.textContent);
    screen.textContent = result;
  } catch (error) {
    screen.textContent = "Erreur";
  }
}

// Mettre à jour l'écran
function updateScreen(value) {
  if (screen.textContent === "0" || screen.textContent === "Erreur") {
    screen.textContent = value;
  } else {
    screen.textContent += value;
  }
}
