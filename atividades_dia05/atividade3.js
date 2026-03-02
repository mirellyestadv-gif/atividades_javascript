const leia = require("readline-sync");

let salBruto
let adiciNoturno
let horaExtra
let desconto
let salLiquido

salBruto = leia.questionFloat("\n Digite o Salario Bruto: ");
adiciNoturno = leia.questionFloat("\n Digite o Adicional Noturno: ");
horaExtra = leia.questionFloat("\n Digite horas extra: ");
desconto = leia.questionFloat("\n Digite total de descontos: ");

salLiquido = (salBruto+adiciNoturno+(horaExtra*5) - desconto);

console.log(`\n Salario Lquido:${salLiquido}`);