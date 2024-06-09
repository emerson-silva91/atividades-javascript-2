let ipNumber1 = document.querySelector("#ipNumber1");
let ipNumber2 = document.querySelector("#ipNumber2");
let btVerificar = document.querySelector("#btVerificar");

function Calcular() {
    let Numero1 = Number(ipNumber1.value);
    let Numero2 = Number(ipNumber2.value);

 if (Numero1 > Numero2){
    alert ('O PRIMEIRO NUMERO E MAIOR QUE O SEGUNDO');
 } else if (Numero1 < Numero2){
    alert ('O PRIMEIRO NUMERO E MENOR QUE O SEGUNDO');
 } else if (Numero1 = Numero2){
    alert ('O PRIMEIRO NUMERO E IGUAL AO SEGUNDO');
 }
}
btVerificar.onclick = function(){
    Calcular()
}