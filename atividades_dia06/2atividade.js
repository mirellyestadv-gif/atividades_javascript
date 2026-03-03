import leia from "readline-sync"

let valor;

valor = leia.questionInt("Digite um numero: ");
if (valor %2==0 && valor >0){
    console.log(`O número ${valor} é Par e Positivo`);
}else if (valor %2==0 && valor <0 ){
    console.log(`O número ${valor} é Par e negativo`);
}else if (valor >0 ){
    console.log(`O número ${valor} é ímpar e Positivo`);
 }else if (valor == 0){
    console.log(`O número ${valor} é Par mas é um valor neutro`);
}else {
    console.log(`O número ${valor} é ímpar e negativo`);
}