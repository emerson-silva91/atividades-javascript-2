let ipPessoas = document.querySelector("#ipPessoas");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular() {
    let Pessoas = ipPessoas.value;
    let ovos = Pessoas * 2;
    let queijo = Pessoas * 50;

    h3Resultado.textContent = 'Voce vai precisar de ' + ovos + ' ovos e ' + queijo + ' gramas de queijo.';
}

btCalcular.onclick = function () {
    calcular()
}
