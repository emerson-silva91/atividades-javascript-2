let ipAlunos = document.querySelector ("#ipAlunos");
let ipTurmas = document.querySelector ("#ipTurmas");
let btDividir = document.querySelector ("#btDividir");
let h2Resultado = document.querySelector ("#h2Resultado");

function dividir (){
    let alunos = Number (ipAlunos.value);
    let turma = Number (ipTurmas.value);
    let alunosPorTurma = alunos / turma;
    let alunosSemTurma = alunos % turma;

    h2Resultado.textContent = 'Cada Turma tera: ' + alunosPorTurma + ' alunos. ' + 'Havera ' + alunosSemTurma + ' aluno(s) sem turma.';   

}
btDividir.onclick = function(){
    dividir()
}