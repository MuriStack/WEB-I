let valor = 100;
let economia = 30;
let acumulado = 0;
let meses = 0;

while (acumulado < valor){
    acumulado += economia;
    meses++;
    console.log(`Mês ${meses}: R$ ${acumulado.toFixed(2)}`);
}

console.log(`Serão necessários ${meses} meses para comprar o produto`);
