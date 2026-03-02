const leia = require ("readline-sync");

let num1
let num2
let num3
let num4
let diferenca

num1 = leia.questionFloat("\n Digite o valor 1: ");
num2 = leia.questionFloat("\n Digite o valor 2: ");
num3 = leia.questionFloat("\n Digite o valor 3: ");
num4 = leia.questionFloat("\n Digite o valor 4: ");

diferenca = ((num1*num2)-(num3*num4));

console.log(`\n A diferença de valores é: ${diferenca}`);
