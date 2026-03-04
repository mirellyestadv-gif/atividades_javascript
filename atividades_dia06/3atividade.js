import leia from "readline-sync"

let pedido;
let quantidade;
let preco;
let valorTotal;
let produto;

pedido = leia.questionInt("Digite a opcao desejada: ");
quantidade = leia.questionInt("Digite quantidade desejada: ");


switch(pedido){
    case 1: 
        
        preco = 10
        produto = ("Cachorro Quente");
        break;
    case 2: 
       
        produto = ("X Salada: ");
        preco = 15
        break;
    case 3: 
        
        produto = ("X Bacon: ");
        preco = 18
        break;
    case 4: 
      
        produto = ("Bauru");
        preco = 12
        break;
    case 5: 
       
        produto = "Refrigerante "
        preco = 8
        break;
    case 6: 
       
        produto = ("Suco de laranja");
        preco = 13
        break;
    default:
            console.log ("Insira uma opção valida");

} 
valorTotal = quantidade*preco;
console.log (` Valor total R$:${valorTotal} \n Seu Pedido é: ${quantidade} ${produto}`);

