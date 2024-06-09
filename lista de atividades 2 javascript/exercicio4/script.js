let ipsabor1 = document.querySelector("#ipsabor1");
let ipsabor2 = document.querySelector("#ipsabor2");
let ipsabor3 = document.querySelector("#ipsabor3");
let ipsabor4 = document.querySelector("#ipsabor4");
let ipRefrigerante = document.querySelector("#ipRefrigerante");
let h4total = document.querySelector("#h4total");
let btTotalc = document.querySelector("#btTotalc");

function Calcular(){
    let sabor1 = ipsabor1.value;
    let sabor2 = ipsabor2.value;
    let sabor3 = ipsabor3.value;
    let sabor4 = ipsabor4.value;
    let refrigerante = Number(ipRefrigerante.value);
    let valorPizza = 12.00;
    let valorRefrigerante = 7.00;

    let valortotal = (valorPizza * 4) + (valorRefrigerante * refrigerante);

    h4total.textContent = 'Sabores escolhidos: ' + sabor1 + ', ' + sabor2 + ', ' + sabor3 + ', ' + sabor4 + '. Valor Total a pagar: R$' + valortotal.toFixed(2);
}

btTotalc.onclick = function (){
    Calcular()
}
