let ipValor = document.querySelector("#ipValor");
let ipMeta = document.querySelector("#ipMeta");
let ipMetaMin = document.querySelector("#ipMetaMin");
let btCalcular = document.querySelector("#btCalcular");
let h1Resultado = document.querySelector("#h1Resultado");


function calcular() {
    let valor = Number(ipValor.value);
    let meta = Number(ipMeta.value);
    let metaMin = Number(ipMetaMin.value);

    let atigimentoMeta = valor / meta * 100;

    let atigimentoMin = valor / metaMin * 100;

    let resultado = '';

    if ( valor >= meta ){
        resultado += 'VOCE ATINGIU A META!';
        
    }else if (valor >= metaMin){
        resultado += 'VOCE ATINGIU A META MINIMA';
    
    }else {
        resultado += 'VOCE NAO ATINGIU A META';

    }
    resultado += 'Percentual de Meta: ' + atigimentoMeta.toFixed(2) + '%. ';
    resultado += 'Percentual Meta Minima: ' + atigimentoMin.toFixed(2) + '%. ';

h1Resultado.textContent = resultado;

}
btCalcular.onclick = function (){
    calcular()
}