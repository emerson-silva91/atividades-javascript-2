let ipNota = document.querySelector ("#ipNota");
let btCalcular = document.querySelector ("#btCalcular");

function Calcular () {
let nota = Number(ipNota.value);

if (nota <= 6 && nota >= 4){
    alert ('Precisa fazer prova substitutiva.');

} else if ( nota >6 ){
    alert ('APROVADO');
} else {
    alert ('REPROVADO')
}

}
btCalcular.onclick = function() {
    Calcular()
}
