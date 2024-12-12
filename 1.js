let valor
valor = prompt("Digite uma número")
let p = document.getElementById("parOuImpar")

if (+valor % 2 === 0) {
    p.textContent = "Número par"
    console.log("Número par")
}
else {
    p.textContent = "Número Ímpar"
    console.log("Número Ímpar")
}
