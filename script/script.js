/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* De like button verandert van uit naar aan. Dit wordt berekend door 1=aan of 0=uit */

var likeButton = document.querySelector('.bewaar');
var likeArray = ['images/plus.png', 'images/check.png'];
var aanUit = 0;
var plus = document.querySelector('header nav ul li img[alt="plus"]');

function bewaarVerhaal() {
    if (aanUit === 0) {
        aanUit += 1;
        likeButton.src = likeArray[1];
        console.log('aan');
        plus.classList = ('aan')
    } else if (aanUit == 1) {
        aanUit -= 1;
        likeButton.src = likeArray[0];
        console.log('uit');
        plus.classList = ('')
    }
}

likeButton.addEventListener('click', bewaarVerhaal);


/* verwijzingen naar de buttons van het filter en de tekst in de button. Via count wordt er een berekening gemaakt of de button aan of uit is. */
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

var resultaten = document.querySelector('#sorteer h4');
var aantalResultaten = 99;
var totaal;

var resultaten1 = document.querySelector('#Resultaten');
var resultaten2 = document.querySelector('#Resultaten_vs2');
var resultatenKleur = document.querySelector('#Resultaten_kleur');

/* Tekst in button filter */
var kruisje = (' | x');

/*Button in filter verandert van kleur en krijgt een kruisje. Dit wordt berekend door 1=aan of 0=uit. Het aantal resultaten verandert in aantal. */

function rekenenBlij() {
    if (countBlij === 0) {
        countBlij += 1;
        buttonBlij.textContent = (buttonBlijTekst + kruisje);
        buttonBlij.classList = ('active');

        totaal = (aantalResultaten -= 8);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countBlij == 1) {
        countBlij -= 1;
        buttonBlij.textContent = (buttonBlijTekst);
        buttonBlij.classList = ('');

        totaal = (aantalResultaten += 8);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

function rekenenBoos() {
    if (countBoos === 0) {
        countBoos += 1;
        buttonBoos.textContent = (buttonBoosTekst + kruisje);
        buttonBoos.classList = ('active');

        totaal = (aantalResultaten -= 9);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countBoos == 1) {
        countBoos -= 1;
        buttonBoos.textContent = (buttonBoosTekst);
        buttonBoos.classList = ('');

        totaal = (aantalResultaten += 9);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

function rekenenDruk() {
    if (countDruk === 0) {
        countDruk += 1;
        buttonDruk.textContent = (buttonDrukTekst + kruisje);
        buttonDruk.classList = ('active');
        totaal = (aantalResultaten -= 10);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countDruk == 1) {
        countDruk -= 1;
        buttonDruk.textContent = (buttonDrukTekst);
        buttonDruk.classList = ('');

        totaal = (aantalResultaten += 10);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

function rekenenRustig() {
    if (countRustig === 0) {
        countRustig += 1;
        buttonRustig.textContent = (buttonRustigTekst + kruisje);
        buttonRustig.classList = ('active');

        totaal = (aantalResultaten -= 12);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countRustig == 1) {
        countRustig -= 1;
        buttonRustig.textContent = (buttonRustigTekst);
        buttonRustig.classList = ('');

        totaal = (aantalResultaten += 12);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

function rekenenVaag() {
    if (countVaag === 0) {
        countVaag += 1;
        buttonVaag.textContent = (buttonVaagTekst + kruisje);
        buttonVaag.classList = ('active');

        totaal = (aantalResultaten -= 5);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countVaag == 1) {
        countVaag -= 1;
        buttonVaag.textContent = (buttonVaagTekst);
        buttonVaag.classList = ('');

        totaal = (aantalResultaten += 5);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

function rekenenInspirerend() {
    if (countInspirerend === 0) {
        countInspirerend += 1;
        buttonInspirerend.textContent = (buttonInspirerendTekst + kruisje);
        buttonInspirerend.classList = ('active');

        totaal = (aantalResultaten -= 6);
        resultaten.textContent = (totaal + ' resultaten');

    } else if (countInspirerend == 1) {
        countInspirerend -= 1;
        buttonInspirerend.textContent = (buttonInspirerendTekst);
        buttonInspirerend.classList = ('');

        totaal = (aantalResultaten += 6);
        resultaten.textContent = (totaal + ' resultaten');
    }
}

/* Microinteractie voor het laden van de nieuwe resultaten. Eerst zal er een seconde een grijs vak getoond worden waarna de nieuwe resultaten geladen worden */

function r1Uit() {
    resultaten1.classList = ('uit');
}

function kleurAan1() {
    resultatenKleur.classList = ('aan');
    window.setTimeout(r2Aan, 1000);
    window.setTimeout(kleurUit, 2000);
}


function r2Uit() {
    resultaten2.classList = ('uit');
}

function kleurAan2() {
    resultatenKleur.classList = ('aan');
    window.setTimeout(r1Aan, 1000);
    window.setTimeout(kleurUit, 2000);
}

function r1Aan() {
    resultaten1.classList = ('');
}

function r2Aan() {
    resultaten2.classList = ('aan');
}

function kleurUit() {
    resultatenKleur.classList = ('');
}

buttonBlij.addEventListener('click', rekenenBlij);
buttonBlij.addEventListener('click', r1Uit);
buttonBlij.addEventListener('click', kleurAan1);

buttonBoos.addEventListener('click', rekenenBoos);
buttonBoos.addEventListener('click', r2Uit);
buttonBoos.addEventListener('click', kleurAan2);


buttonDruk.addEventListener('click', rekenenDruk);
buttonDruk.addEventListener('click', r1Uit);
buttonDruk.addEventListener('click', kleurAan1);

buttonRustig.addEventListener('click', rekenenRustig);
buttonRustig.addEventListener('click', r2Uit);
buttonRustig.addEventListener('click', kleurAan2);

buttonVaag.addEventListener('click', rekenenVaag);
buttonVaag.addEventListener('click', r1Uit);
buttonVaag.addEventListener('click', kleurAan1);

buttonInspirerend.addEventListener('click', rekenenInspirerend);
buttonInspirerend.addEventListener('click', r2Uit);
buttonInspirerend.addEventListener('click', kleurAan2);
