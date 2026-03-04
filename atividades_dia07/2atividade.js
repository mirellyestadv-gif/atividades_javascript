import leia from "readline-sync";

let idade = 0;
let menosIdade =0;
let maisIdade =0;

while (idade  >= 0 ){
   

  idade = leia.questionInt("Digite sua idade: ");
    if (idade < 21){
        menosIdade++;
    } if (idade >50 ){
      maisIdade++;
    }

} 
console.log(` Total de pessoas menores de 21 anos: ${menosIdade} \n Total de pessoas maiores de 50 anos: ${maisIdade}`);