
let sp, btn_start, btn_stop, timer, h, mn, s, ms;

//Initialisation des variables quand la page est chargée
window.onload = function() {
    sp = document.getElementsByTagName("span");
    btn_start = document.getElementById("start");   
    btn_stop = document.getElementById("stop");
    timer:
    h = 0;
    mn = 0; 
    s = 0;
    ms = 0;
}

//Fonction pour démarrer le chronomètre
function update_chrono() {
    ms+=1;
    if(ms==10) {
        ms = 0;
        s += 1;
    }
    if(s==60) {
        s = 0;
        mn += 1;
    }
    if(mn==60) {
        mn = 0;
        h += 1;
    }

    //Mettre à jour l'affichage
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//Fonction pour démarrer le chronomètre
function start() {
    timer = setInterval(update_chrono, 100);// Démarrer la mise à jour toutes les 100 ms
    btn_start.disabled = true; // Désactiver le bouton de démarrage
}

function stop() {
    clearInterval(timer); // Arrêter le chronomètre
    btn_start.disabled = false; // Réactiver le bouton de démarrage
}

function reset() {
    clearInterval(timer); // Arrêter le chronomètre
    h = 0; mn = 0; s = 0; ms = 0; // Réinitialiser les variables
    sp[0].innerHTML = "0h";
    sp[1].innerHTML = "0mn";
    sp[2].innerHTML = "0s";
    sp[3].innerHTML = "0ms";
    btn_start.disabled = false; // Réactiver le bouton de démarrage
}