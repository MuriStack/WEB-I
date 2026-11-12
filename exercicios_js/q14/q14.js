let quantidade = 7;
let atual = 0;
let proximo = 1;

for (let i = 1; i <= quantidade; i++){
    console.log(atual);
    let soma = atual + proximo;
    atual = proximo;
    proximo = soma;
}
