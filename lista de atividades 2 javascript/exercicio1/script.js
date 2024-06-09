let ipdolar = document.querySelector("#ipdolar");
let btReajuste = document.querySelector("#btReajuste");
let reajuste1 = document.querySelector("#reajuste1");
let reajuste2 = document.querySelector("#reajuste2");
let reajuste5 = document.querySelector("#reajuste5");
let reajuste10 = document.querySelector("#reajuste10");

function porcentagem() {
    let valor = parseFloat(ipdolar.value);
    let umporcem = 1;
    reajuste1.textContent = valor + (valor * umporcem / 100);

    let doisporcem = 2;
    reajuste2.textContent = valor + (valor * doisporcem / 100);

    let cincoporcem = 5;
    reajuste5.textContent = valor + (valor * cincoporcem / 100);

    let dezporcem = 10;

    reajuste10.textContent = valor + (valor * dezporcem / 100);
}

btReajuste.onclick = function () {
    porcentagem()


}