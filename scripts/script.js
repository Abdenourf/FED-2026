// JavaScript Document

/**********************/
/* JS 3-stap          */
/* HAMBURGER MENU     */
/**********************/

// stap 1: zoek de menu button op in de html
// en sla die op in een variabele
var menuButton = document.querySelector(".menu-toggle");

// stap 2: laat de button naar clicks luisteren
// als er geklikt wordt, wordt de functie 'toggleMenu' uitgevoerd
menuButton.onclick = toggleMenu;

// stap 3: de functie 'toggleMenu'
function toggleMenu() {
  // zoek de nav op en sla die op in een variabele
  var nav = document.querySelector("#hoofdmenu");

  // voeg de class 'toonMenu' toe aan de nav als die er nog niet is
  // en haal hem weg als die er wel is (classList & toggle)
  nav.classList.toggle("toonMenu");

  // als het menu gesloten is, en geopend wordt
  // het aria-expanded attribuut van de button op true zetten
  // hiermee weten mensen die een screenreader gebruiken de status van het menu
  if (menuButton.ariaExpanded == "false") {
    menuButton.ariaExpanded = "true";
  }
  // anders vice versa
  else {
    menuButton.ariaExpanded = "false";
  }
}


/************************************/
/* Bonus: sluiten met de Escape toets */
/************************************/

// het hele document laten luisteren naar toetsen
document.onkeydown = sluitMenuMetEscape;

function sluitMenuMetEscape(event) {
  // alleen als de Escape toets wordt ingedrukt
  // en het menu open is
  if (event.key == "Escape" && menuButton.ariaExpanded == "true") {
    // het menu sluiten met dezelfde functie
    toggleMenu();

    // de focus terug op de button zetten
    // zodat toetsenbordgebruikers weten waar ze zijn
    menuButton.focus();
  }
}