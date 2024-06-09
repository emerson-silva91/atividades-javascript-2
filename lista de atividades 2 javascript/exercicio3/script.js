let ipNumber1 = document.querySelector("#ipNumber1");
let ipNumber2 = document.querySelector("#ipNumber2");
let btCalcular = document.querySelector("#btCalcular");
let h2soma = document.querySelector("#h2soma");
let h2Subtracao = document.querySelector("#h2Subtracao");
let h2Multiplicacao = document.querySelector("#h2Multiplicacao");
let h2Divisao = document.querySelector("#h2Divisao");

function Calcular() {
    let Valor1 = parseFloat(ipNumber1.value);
    let Valor2 = parseFloat(ipNumber2.value);

    let soma = Valor1 + Valor2;
    let subtracao = Valor1 - Valor2;
    let multiplicacao = Valor1 * Valor2;
    let divisao = Valor1 / Valor2;

    h2soma.textContent = "Soma: " + soma;
    h2Subtracao.textContent = "Subtracao: " + subtracao;
    h2Multiplicacao.textContent = "Multiplicacao: " + multiplicacao;
    h2Divisao.textContent = "Divisao: " + divisao;
}

btCalcular.onclick = function() {
    Calcular()
}
