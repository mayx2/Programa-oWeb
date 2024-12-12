let numero
do {
    numero = +prompt("Digite um número igual ou menor que 10")
} while (numero > 10)
let p = document.getElementById("Fatorial")
let produto = 1


for (let i = 1; i <= numero; i++) {
    produto = produto * i;
}
p.textContent = `O fatorial de ${numero} é igual a ${produto}`;

