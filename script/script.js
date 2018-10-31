/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



var likeButton = document.querySelector('.hartje');
var likeArray = ['images/unlike.png', 'images/like.png'];
var aanUit = 0;


/* De like button verandert van uit naar aan. Dit wordt berekend door 1=aan of 0=uit */
function bewaarVerhaal() {
    if (aanUit === 0) {
        aanUit += 1;
        likeButton.src = likeArray[1];
        console.log('aan');
    } else if (aanUit == 1) {
        aanUit -= 1;
        likeButton.src = likeArray[0];
        console.log('uit');
    }
}

likeButton.addEventListener('click', bewaarVerhaal);

//verwijzingen naar HTML document
var buttonBlij = document.getElementById('blij');
var buttonBlijTekst = document.getElementById('blij').innerHTML;
var countBlij = 0;

var buttonBoos = document.getElementById('boos');
var buttonBoosTekst = document.getElementById('boos').innerHTML;
var countBoos = 0;

var buttonDruk = document.getElementById('druk');
var buttonDrukTekst = document.getElementById('druk').innerHTML;
var countDruk = 0;

var buttonRustig = document.getElementById('rustig');
var buttonRustigTekst = document.getElementById('rustig').innerHTML;
var countRustig = 0;

var buttonVaag = document.getElementById('vaag');
var buttonVaagTekst = document.getElementById('vaag').innerHTML;
var countVaag = 0;

var buttonInspirerend = document.getElementById('inspirerend');
var buttonInspirerendTekst = document.getElementById('inspirerend').innerHTML;
var countInspirerend = 0;

var resultaten = document.querySelector('#Filter h3');
var aantalResultaten = 99;
var totaal;

/* Tekst in button filter */
var kruisje = (' | x');

/*Button in filter verandert van kleur en krijgt een kruisje. Dit wordt berekend door 1=aan of 0=uit. Het aantal resultaten verandert in aantal. */

function rekenenBlij() {
    if (countBlij === 0) {
        countBlij += 1;
        buttonBlij.textContent = (buttonBlijTekst + kruisje);
        buttonBlij.classList = ('active');

        totaal = (aantalResultaten -= 8);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countBlij == 1) {
        countBlij -= 1;
        buttonBlij.textContent = (buttonBlijTekst);
        buttonBlij.classList = ('');

        totaal = (aantalResultaten += 8);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

function rekenenBoos() {
    if (countBoos === 0) {
        countBoos += 1;
        buttonBoos.textContent = (buttonBoosTekst + kruisje);
        buttonBoos.classList = ('active');

        totaal = (aantalResultaten -= 9);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countBoos == 1) {
        countBoos -= 1;
        buttonBoos.textContent = (buttonBoosTekst);
        buttonBoos.classList = ('');

        totaal = (aantalResultaten += 9);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

function rekenenDruk() {
    if (countDruk === 0) {
        countDruk += 1;
        buttonDruk.textContent = (buttonDrukTekst + kruisje);
        buttonDruk.classList = ('active');
        totaal = (aantalResultaten -= 10);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countDruk == 1) {
        countDruk -= 1;
        buttonDruk.textContent = (buttonDrukTekst);
        buttonDruk.classList = ('');

        totaal = (aantalResultaten += 10);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

function rekenenRustig() {
    if (countRustig === 0) {
        countRustig += 1;
        buttonRustig.textContent = (buttonRustigTekst + kruisje);
        buttonRustig.classList = ('active');

        totaal = (aantalResultaten -= 12);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countRustig == 1) {
        countRustig -= 1;
        buttonRustig.textContent = (buttonRustigTekst);
        buttonRustig.classList = ('');

        totaal = (aantalResultaten += 12);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

function rekenenVaag() {
    if (countVaag === 0) {
        countVaag += 1;
        buttonVaag.textContent = (buttonVaagTekst + kruisje);
        buttonVaag.classList = ('active');

        totaal = (aantalResultaten -= 5);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countVaag == 1) {
        countVaag -= 1;
        buttonVaag.textContent = (buttonVaagTekst);
        buttonVaag.classList = ('');

        totaal = (aantalResultaten += 5);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

function rekenenInspirerend() {
    if (countInspirerend === 0) {
        countInspirerend += 1;
        buttonInspirerend.textContent = (buttonInspirerendTekst + kruisje);
        buttonInspirerend.classList = ('active');

        totaal = (aantalResultaten -= 6);
        resultaten.textContent = (totaal + ' Resultaten');

    } else if (countInspirerend == 1) {
        countInspirerend -= 1;
        buttonInspirerend.textContent = (buttonInspirerendTekst);
        buttonInspirerend.classList = ('');

        totaal = (aantalResultaten += 6);
        resultaten.textContent = (totaal + ' Resultaten');
    }
}

buttonBlij.addEventListener('click', rekenenBlij);
buttonBoos.addEventListener('click', rekenenBoos);
buttonDruk.addEventListener('click', rekenenDruk);
buttonRustig.addEventListener('click', rekenenRustig);
buttonVaag.addEventListener('click', rekenenVaag);
buttonInspirerend.addEventListener('click', rekenenInspirerend);

