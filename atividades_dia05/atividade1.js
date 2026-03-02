const leia = require ("readline-sync");

let salario;
let abono;
let total;

salario = leia.questionFloat("\n Digite seu salario: ");
abono = leia.questionFloat("\n Digite seu Abono: ");
total = (salario + abono);
console.log (`\n Valor total a receber:R$ ${total}`);