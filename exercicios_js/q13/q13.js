let numero = 12;
let divisores = 0;

for (let i = 1; i <= numero; i++){
    if (numero % i == 0){
        divisores++;
    }
}

console.log(`O número ${numero} possui ${divisores} divisores positivos`);

if (divisores == 2){
    console.log("O número é primo");
}
else{
    console.log("O número não é primo");
}
