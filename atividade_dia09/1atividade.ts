import readlineSync = require( "readline-sync");
import { Queue } from "../PilhaeFila/Queue";






const fila = new Queue<string>();

let cliente: string;
let continuar: boolean = false;
let opcao: number;

do{
    console.log ("1: Adicionar um novo Cliente na fila");
    console.log ("2: Listar todos os Clientes na fila");
    console.log ("3:  Retirar cliente da fila"        );
    console.log ("0:            sair                  ");  

   opcao = readlineSync.questionInt( "Selecione uma opcao: ");  
   
   switch(opcao){

    case 0:
            continuar = true;
            break;
    case 1:
        cliente = readlineSync.question("Digite o nome do cliente: \n") 
        fila.enqueue(cliente);
     
        break;
    case 2:
        console.log("Clientes na fila")
        if (fila.isEmpty()){
        console.log("Não há clientes na fila");
        
        }else 
            {fila.printQueue();
        console.log("Cliente adicionado: " );}
        break;

    case 3:
        console.log(fila.dequeue());
        console.log("cliente removido")
        break;
        default:
            console.log("opção invalida");
   }
}while(continuar!=true);