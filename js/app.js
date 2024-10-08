function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
    let qtdIngresso = parseInt(document.getElementById("qtd").value);
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    let pista = document.getElementById("qtd-pista");
    let superior = document.getElementById("qtd-superior");
    let inferior = document.getElementById("qtd-inferior");

    console.log(qtdInferior, qtdSuperior, qtdPista);
    if (ingresso == "superior") {
        superior.innerHTML = qtdSuperior - qtdIngresso;

    } else if (ingresso == "inferior") {
        inferior.innerHTML = qtdInferior - qtdIngresso;

    } else {
        pista.innerHTML = qtdPista - qtdIngresso;

    }
}