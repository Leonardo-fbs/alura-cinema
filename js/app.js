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
        if (qtdSuperior < qtdIngresso) {
            alert("Não há ingressos suficientes para a pista superior.");
        } else {
            superior.innerHTML = qtdSuperior - qtdIngresso;
            alert("Ingresso comprado com sucesso!");
        }


    } else if (ingresso == "inferior") {
        if (qtdInferior < qtdIngresso) {
            alert("Não há ingressos suficientes para a pista inferior.");
        } else {
            inferior.innerHTML = qtdInferior - qtdIngresso;
            alert("Ingresso comprado com sucesso!");
        }
    } else {
        if (qtdPista < qtdIngresso) {
            alert("Não há ingressos suficientes para a pista.");
        } else {
            pista.innerHTML = qtdPista - qtdIngresso;
            alert("Ingresso comprado com sucesso!");
        }
    }
}