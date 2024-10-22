
let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = " ";
let numeroDigitado = 4; // Substitua este número pelo desejado

fibonacci += numA + " " + numB;

function fibonacciVal(num) {
   
    for (let contagem = 2; contagem <= 5; contagem++) { 
        numC = numA + numB;
        fibonacci += " " + numC;
        numA = numB;
        numB = numC;
    }
    
    return fibonacci.includes(num); 
   
}

let num = numeroDigitado;

if (isNaN(num)) {
    console.log(`Por favor, digite um número válido.`);
} else if (fibonacciVal(num)) {
    console.log(`O número ${num} faz parte da sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não faz parte da sequência de Fibonacci.`);
}

fibonacciVal(numeroDigitado);
console.log(fibonacci);

