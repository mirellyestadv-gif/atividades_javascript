const leia = require ("readline-sync");

let nota1
let nota2
let nota3
let nota4
let media

nota1 = leia.questionFloat("Insira a nota 1: ");
nota2 = leia.questionFloat("Insira a nota 2: ");
nota3 = leia.questionFloat("Insira a nota 3: ");
nota4 = leia.questionFloat("Insira a nota 4: ");

media = ((nota1+nota2+nota3+nota4)/4);

console.log(`\n Média Final: ${media}`);