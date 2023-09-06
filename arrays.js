let numeros = [3, 1, 6, 8];
//             0  1  2  3

console.log(numeros);
console.log(numeros.length);
console.log(numeros[2]);

numeros[2] = 0;
console.log(numeros[2]);
console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

let nombres = ["Juan", "Maria", "Ana"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
