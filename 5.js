let soma = 0
let p = document.getElementById("pares")
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        soma = soma + i
    }
}
console.log(soma)
p.textContent = `A soma dos números pares de 1 a 100 é: ${soma}`;