alert("Olá, mundo!");
console.log("Olá, mundo!"); // print() em python

// Comentário em python
console.log("------------------");
console.log("Saída de dados");
console.log(10);
console.log("20")
console.log("Texto qualquer");

// Variáveis
console.log("------------------");
console.log("Variáveis");
var x = 10; // Não é mais usado
let y = 20; // Variável que varia 
const z = 30; // Variável que não varia
console.log(x, y, z)

// Tipos de dados
console.log("------------------");
console.log("Tipos de dados");
// let a = 10;
// let b = 10.5;
// let c = "aaaa";
// let d = true;
// let e = false;

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// Tipos de dados
console.log("------------------");
console.log("Tipagem");

let n = 99;
console.log(n, typeof(n));
n = "noventa e nove"
console.log(n, typeof(n));
n = "99";
console.log(n, typeof(n));
n = Number(n) // Conversão de str -> number
console.log(n, typeof(n));

// Formatação
console.log("------------------");
console.log("Formatação");

console.log("Texto aqui");
console.log(99);
console.log("Aqui é texto", 18);
console.log("Olá", "Mundo!");
console.log("Olá" + "Mundo!");
let nome = "Belizário";
console.log(`Olá, ${nome}!`);

// Operadores Aritméticos
console.log("------------------");
console.log("Operadores aritméticos");

let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a ** b); // 1000
console.log(a % b) // 1

// Operadores Relacionais
console.log("------------------");
console.log("Operadores relacionais");

console.log(a > b); // true
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true

// Operadores Lógicos
console.log("------------------");
console.log("Operadores lógicos");

console.log((10 > 3) && (2 != 4)); // and
console.log((0 > 3) || (2 != 2)); // or
console.log(!(3 > 0)); // not

// Condicionais
console.log("------------------");
console.log("Condicionais");
let idade = 20;

if (idade >= 18){
    console.log("Adulto");
}
else if (idade >= 13){
    console.log("Adolescente");
}
else{
    console.log("Criança")
}

// Laços
console.log("------------------");
console.log("Laço while");
let contador = 5;

while (contador > 0){
    console.log(contador);
    contador--;
}

console.log("Laço for");

for (let i = 1; i <= 5; i++){
    console.log(i)
}