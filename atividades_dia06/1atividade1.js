 import leia from "readline-sync";

 let a;
 let b;
 let c;

 a = leia.questionInt("Insira o valor de A:  ");
 b = leia.questionInt("Insira o valor de B:  ");
 c = leia.questionInt("Insira o valor de C:  ");

 if (a+b > c){
    console.log("A soma de A + B é maior do que C ");
 }else if (a+b < c){
    console.log("A soma de A + B é menor do que C ");
 }else 
    console.log("A soma de A + B é igual a C ");

