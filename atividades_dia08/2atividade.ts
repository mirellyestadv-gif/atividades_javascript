import readlineSync from "readline-sync";


const lista = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let numero;


     numero = readlineSync.questionInt ("Digite um numero: ")
    let numeroLista = false;
    for (let valor of lista){
        if (valor==numero) {// item ainda não existe
            numeroLista = true;
     
        
    }
}
    if(numeroLista){
       console.log(`O número ${numero} foi encontrado!`) 
    }else {
     
        console.log(`O número ${numero} não foi encontrado!`)
    }

