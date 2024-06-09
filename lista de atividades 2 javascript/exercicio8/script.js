let ipNumber = document.querySelector("#ipNumber");
let ipVerificar = document.querySelector("#ipVerificar");

function Verificar() {
    let numero = Number(ipNumber.value);

    if (numero % 2 == 0) {
        alert('O numero ' + numero + ' e Par');
    } else {
        alert('O numero ' + numero + ' e Impar');
    }

}
ipVerificar.onclick = function () {
    Verificar()
}