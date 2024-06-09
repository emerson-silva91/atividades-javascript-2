function calcular() {
    let nome1 = document.getElementById('nome1').value;
    let ano1 = parseInt(document.getElementById('ano1').value);
    let nome2 = document.getElementById('nome2').value;
    let ano2 = parseInt(document.getElementById('ano2').value);
    let nome3 = document.getElementById('nome3').value;
    let ano3 = parseInt(document.getElementById('ano3').value);

    let pessoas = [
        {nome: nome1, ano: ano1},
        {nome: nome2, ano: ano2},
        {nome: nome3, ano: ano3}
    ];

    pessoas.sort((a, b) => a.ano - b.ano);

    let resultado = '';
    for (let i = 0; i < pessoas.length; i++) {
        let idade = new Date().getFullYear() - pessoas[i].ano;
        resultado += 'Pessoa ' + (i + 1) + ': ' + pessoas[i].nome + ' - ' + idade + ' anos<br>';
    }

    document.getElementById('resultado').innerHTML = resultado;
}