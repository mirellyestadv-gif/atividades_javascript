import readlineSync from "readline-sync";

const cores:  Array<string> = new Array<string>(5);



for (let i =0; i < cores.length; i++){
cores[i] = readlineSync.question("Digite uma cor: ");
     
}
console.log("\n Lista de cores!");
cores.forEach(cor => {
  console.log(cor);})

 console.log("\n Lista de ordenada!"); 
    cores.sort();

cores.forEach(cor => {
  console.log(cor);});