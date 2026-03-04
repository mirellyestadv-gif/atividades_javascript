import leia from "readline-sync";

let vetorNumeros = [2,5,1,3,4,9,7,8,10,6];
let numero;
let posicao;
let percorrer = false; 

numero = leia.questionInt("Digite a posição do Vetor: ");
for (let i = 0; i< vetorNumeros.length; i++){
    if (vetorNumeros[i]==numero){
        posicao = i;
        percorrer=true;
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
        break;
    } 
    }
      if (percorrer != true){
         console.log("Não foi encontrado");
 }