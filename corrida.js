let _minValue;
let _maxValue;
let diff;
let drift;
let sortedValue;
let resultAfterDrift;
let PedroVolta;
let EdnaVolta;
let JucaVolta;
let PedroGanhador = 0;
let EdnaGanhador = 0;
let JucaGanhador = 0;
let numeroVoltas;

function volta(_minValue, _maxValue) {
    diff = _maxValue - _minValue;
    sortedValue = Math.round(Math.random()*diff) + _minValue;
    resultAfterDrift = sortedValue - sortedValue*drift;
}

function Pedro() {
    _minValue = 150;
    _maxValue = 230;
    drift = 0.03;
    volta(_minValue, _maxValue);
    PedroVolta = resultAfterDrift;
    console.log (PedroVolta);
}

function Juca() {
    _minValue = 120;
    _maxValue = 260;
    drift = 0.05;
    volta(_minValue, _maxValue);
    JucaVolta = resultAfterDrift;
    console.log (JucaVolta);
}

function Edna() {
    _minValue = 180;
    _maxValue = 220;
    drift = 0.01;
    volta(_minValue, _maxValue);
    EdnaVolta = resultAfterDrift;
    console.log (EdnaVolta);
}

function corrida () {
    for (var i = 0; i < numeroVoltas; i++) {
        Edna ();
        Juca ();
        Pedro ();
        if (EdnaVolta > JucaVolta && EdnaVolta > PedroVolta) {
            EdnaGanhador++;
        }
        if (JucaVolta > EdnaVolta && JucaVolta > PedroVolta) {
            JucaGanhador++;
        }
        if (PedroVolta > JucaVolta && PedroVolta > EdnaVolta) {
            PedroGanhador++;
        }
    }
    console.log (EdnaGanhador);
    console.log (JucaGanhador);
    console.log (PedroGanhador);
}

function ganhador() {
    if (EdnaGanhador > JucaGanhador && EdnaGanhador > PedroGanhador) {
        document.getElementById("resultado").innerHTML = "Edna Campeã" + "\n" + "Edna ganhou:" + EdnaGanhador;
    }
    if (JucaGanhador > EdnaGanhador && JucaGanhador > PedroGanhador) {
        document.getElementById("resultado").innerHTML = "Juca Campeão" + "\n" + "Juca ganhou:" + JucaGanhador;
    }    
    if (PedroGanhador > JucaGanhador && PedroGanhador > EdnaGanhador) {
        document.getElementById("resultado").innerHTML = "Pedro Campeão" + "\n" + "Pedro ganhou:" + PedroGanhador;
    }
}

function rapida() {
    numeroVoltas = 10;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}

function gp() {
    numeroVoltas = 70;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}

function enduro() {
    numeroVoltas = 160;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}
