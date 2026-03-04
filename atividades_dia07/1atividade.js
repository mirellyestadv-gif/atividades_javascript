import leia from "readline-sync";

let numero1, numero2;
let contador

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

if (numero1 < numero2){
    for(let contador = numero1; contador <=numero2; contador++){
        if(contador %3==0 && contador %5==0){
             console.log(` ${contador} é multiplo de 3 e 5 `);
        }
      
    }
    

}else {
    console.log("Intervalo inválido!");
   
}