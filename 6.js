let numero = +prompt("Digite um número:")
let p = document.getElementById("tabuada")
for (i = 1; i <= 10; i++) {
    let mult = numero * i
    p.textContent += `${numero}x${i}=${mult} | `;
}