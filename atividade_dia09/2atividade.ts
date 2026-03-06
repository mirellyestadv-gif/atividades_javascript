import readlineSync = require( "readline-sync");
import { Stack } from "../PilhaeFila/Stack";

const pilha = new Stack<string>();
let opcao: number;
let livro: string;
let continuar: boolean = false;



do{ 
console.log("\n1-Adicionar um novo livro ");
console.log("2-Listar de livros  "   );
console.log("3-Retirar um livro "    );
console.log("4-Sair           ");

opcao = readlineSync.questionInt(console.log("Escolha uma opcao: "));
 
switch(opcao){

    case 0:
        
            continuar = true;
            break;


    case 1:
       
        livro = readlineSync.question("Digite o nome do livro:\n")
        pilha.push(livro);
        break;
    case 2:
            if(pilha.isEmpty()){
                console.log ("Não há livros na pilha\n");
            }else {
                console.log("\nLivros adicionados\n")
                pilha.printStack();3
            break;   
            }
    case 3:
        console.log("\nLivro excluido:  " +  pilha.pop());
            break;
    default:
        console.log("Opcao invalida")
    
}

}while(continuar!=true);