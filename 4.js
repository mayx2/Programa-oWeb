let cor = prompt("Digite o nome de uma cor em inglês:").toLowerCase()
let p = document.getElementById("cor")
switch (cor) {
    case "red":
        p.textContent = "Vermelho";
        break;
    case "yellow":
        p.textContent = "Amarelo";
        break;
    case "green":
        p.textContent = "Verde";
        break;
    case "pink":
        p.textContent = "Rosa";
        break;
    case "white":
        p.textContent = "Branco";
        break;
    default:
        p.textContent = "Cor desconhecida";
}