// Array con i percorsi delle immagini
const immagini = [
    "./img/amazon.jpg",
    "./img/revolut-banca-italiana.jpg",
    "./img/netflix.jpg"
];

// Selezione dell'elemento immagine con id "copertina"
let indice = 0;  // Impostiamo l'indice iniziale a 0 (prima immagine)
const transizioni = document.getElementById("img-transizioni");

// Funzione per cambiare immagine ogni 2 secondi
setInterval(() => {
    indice = (indice + 1) % immagini.length;  // Incrementiamo l'indice e torniamo a 0 quando arriva alla fine
    transizioni.src = immagini[indice];  // Cambiamo la sorgente dell'immagine
}, 2500);  // 2000 millisecondi = 2 secondi
