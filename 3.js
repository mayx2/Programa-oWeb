let nota
nota = +prompt("Digite uma nota de 0 a 100")
let p = document.getElementById("letra")
if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
        p.textContent = "A"
        alert("A")
    }
    else if (nota >= 80) {
        p.textContent = "B"
        alert("B")
    }
    else if (nota >= 70) {
        p.textContent = "C"
        alert("C")
    }
    else if (nota >= 60) {
        p.textContent = "D"
        alert("D")
    }
    else {
        p.textContent = "F"
        alert("F")
    }
}
else {
    p.textContent = "Nota inválida";
    alert("Nota inválida");
}