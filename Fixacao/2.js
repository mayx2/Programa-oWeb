let soma = 0;

let p = document.getElementById("nota")
for (i = 0; i < 4; i++) {
    let nota = +prompt("Digite a nota:")
    soma = soma + nota;
}
let media = soma / 4
if (media >= 7) {
    p.textContent = "Aluno aprovado"
}
else {
    p.textContent = "Aluno Reprovado"
}