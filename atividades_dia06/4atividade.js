import leia from "readline-sync"

let numero1;
let numero2;
let operador;
let calculo;
let sinal;

numero1 = leia.questionFloat ("Digite um o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");

operador = leia.questionInt ("Escolha uma opção: \n 1-soma \n 2-subtração \n 3-multiplicação \n 4-divisão \n");

switch (operador){
     case 1:
        sinal = "+"
        calculo = numero1+numero2
        break;
    case 2:
        sinal = "-"
        calculo = numero1-numero2
        break;
    case 3:
        sinal = "*"
        calculo = numero1*numero2
        break;
    case 4:
        sinal = "/"
        calculo = numero1/numero2
        break;  
    default:
        console.log("Digite uma opção valida");
 
}
 console.log(`${numero1} ${sinal} ${numero2} = ${calculo}`)