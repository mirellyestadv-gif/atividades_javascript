import leia from "readline-sync"

let numero;
let soma = 0;
let media;
let contador = 0;


do{
    numero = leia.questionInt("Digite um numero: ");
        if (numero %3==0){
            contador++
           soma = soma + numero
        }   

}while(numero !=0 )

    if (contador > 0){
    media = soma / contador
    console.log(`A média de todos os números múltiplos de 3 é: ${media}`)
}else {
    console.log("Não tem multiplos de 3!");
}
