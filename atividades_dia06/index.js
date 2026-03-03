import leia from "readline-sync";

let nome;
let idade;
let doacao;


nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");
doacao = leia.keyInYN("Primeira doação de Sangue: ");

if (idade >= 18 && idade <= 60){
    console.log(`${nome} esta apto a doar sangue!`);
}else if (idade >60 && idade <= 69 && doacao == false){
    console.log (`${nome} esta apto a doar sangue!`);
}else {
    console.log(`${nome} não esta apto a doar sangue!`)
}