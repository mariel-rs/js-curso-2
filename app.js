let title = document.querySelector("h1");
title.innerHTML = "Hora del desafío";

function clickedButton() {
    console.log("El botón fue clicado");
}

function promptButton() {
    let brazilCity = prompt("Escribe el nombre de una ciudad de Brasil");
    alert(`Estuve en ${brazilCity} y me acordé de ti`);
}

function alertaButton() {
    alert("Yo amo JS");
}

function sumaButton() {
    let number1 = parseInt(prompt("Escribe un número para hacer una suma"));
    let number2 = parseInt(prompt("Escribe otro número para hacer una suma"));
    let resultado = number1 + number2;

    alert(`El resultado de la suma es ${resultado}`);

}
