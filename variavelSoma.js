// int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let indice = 12
let soma = 0
let k = 1

for (let soma = 0; soma < indice; soma++) {
    k = k + 1;
    soma = soma + k
    console.log(soma)
}