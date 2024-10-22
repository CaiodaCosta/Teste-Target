function verificarLetraA(texto) {

    let textoLower = texto.toLowerCase();
    
    let quantidadeA = (textoLower.match(/a/g) || []).length;

    if (quantidadeA > 0) {
        console.log(`A letra 'a' (ou 'A') ocorre ${quantidadeA} vez(es) na string.`);
    } else {
        console.log("A letra 'a' (ou 'A') não foi encontrada na string.");
    }
}

let minhaString = "Bem vindos Ao teste de estagio da target. Esperamos que você faça uma boa prova. Atenciosamente: RH";
verificarLetraA(minhaString);